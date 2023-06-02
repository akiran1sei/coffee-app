import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export function Edit() {
  const [coffee, setCoffee] = useState("");
  const [roast, setRoast] = useState("50");
  const [roastMessage, setRoastMessage] = useState("");
  const [aromaDry, setAromaDry] = useState("");
  const [aromaCrust, setAromaCrust] = useState("");
  const [aromaBreak, setAromaBreak] = useState("");
  const [aromaMessage, setAromaMessage] = useState("");
  const [defects, setDefects] = useState("");
  const [point, setPoint] = useState(0);
  const [score, setScore] = useState(0);
  const [defectsMessage, setDefectsMessage] = useState("");
  const [cleancap, setCleancap] = useState("");
  const [cleancapMessage, setCleancapMessage] = useState("");
  const [sweet, setSweet] = useState("");
  const [sweetMessage, setSweetMessage] = useState("");
  const [acidity, setAcidity] = useState("");
  const [acidityMessage, setAcidityMessage] = useState("");
  const [acidityStrength, setAcidityStrength] = useState("");
  const [mouthfeel, setMouthfeel] = useState("");
  const [mouthfeelMessage, setMouthfeelMessage] = useState("");
  const [bodyStrength, setBodyStrength] = useState("");
  const [flavor, setFlavor] = useState("");
  const [flavorMessage, setFlavorMessage] = useState("");
  const [after, setAfter] = useState("");
  const [afterMessage, setAfterMessage] = useState("");
  const [balance, setBalance] = useState("");
  const [balanceMessage, setBalanceMessage] = useState("");
  const [overall, setOverall] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // フォームの入力値をサーバーに送信する
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        coffee,
        roast,
        roastMessage,
        aromaDry,
        aromaCrust,
        aromaBreak,
        aromaMessage,
        defects,
        defectsMessage,
        cleancap,
        cleancapMessage,
        sweet,
        sweetMessage,
        acidity,
        acidityMessage,
        acidityStrength,
        mouthfeel,
        mouthfeelMessage,
        bodyStrength,
        flavor,
        flavorMessage,
        after,
        afterMessage,
        balance,
        balanceMessage,
        overall,
        result,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // バリデーション

    if (!coffee) {
      setError("未記入・名前または、番号を入力してください");
    } else if (!roast || null) {
      setError("未記入・roastを入力してください");
    } else if (!aromaDry || null) {
      setError("未記入・アロマのドライを入力してください");
    } else if (!aromaCrust || null) {
      setError("未記入・アロマのクラストを入力してください");
    } else if (!aromaBreak || null) {
      setError("未記入・アロマのブレイクを入力してください");
    } else if (!defects || null) {
      setError("未記入・欠点などがなければ0と記入してください。");
    } else if (!cleancap || null) {
      setError("未記入・クリーンカップを入力してください");
    } else if (!sweet || null) {
      setError("未記入・甘さを入力してください");
    } else if (!acidity || null) {
      setError("未記入・酸の質を入力してください");
    } else if (!acidityStrength || null) {
      setError("未記入・酸の強さを入力してください");
    } else if (!mouthfeel || null) {
      setError("未記入・口に含んだ質感を入力してください");
    } else if (!bodyStrength || null) {
      setError("未記入・ボディの強さを入力してください");
    } else if (!flavor || null) {
      setError("未記入・フレーバーを入力してください");
    } else if (!after || null) {
      setError("未記入・後味の印象度を入力してください");
    } else if (!balance || null) {
      setError("未記入・バランスを入力してください");
    } else if (!overall || null) {
      setError("未記入・総合評価を入力してください");
    } else {
      setError(null);
    }
  };
  function defectsAnswer() {
    const answer = Number(point * score * 4);
    setDefects(answer);
  }

  function handleCalculation() {
    const sum =
      -Number(defects) +
      Number(cleancap) +
      Number(sweet) +
      Number(acidity) +
      Number(mouthfeel) +
      Number(flavor) +
      Number(after) +
      Number(balance) +
      Number(overall);

    setResult(sum);
  }
  return (
    <div className={styles.edit_page}>
      <div
        // className={styles.edit}
        className={`${styles.edit} ${styles.open}`}
      >
        <div className={styles.edit_number}>
          <div className={styles.edit_toc}>
            <button className={styles.button}>
              編集目次<span className={styles.edit_toc_open}>▼</span>
              <span className={styles.edit_toc_close}>△</span>
            </button>
          </div>
          <ul className={styles.edit_number_list}>
            <li className={styles.edit_number_item}>
              1:コーヒー豆の名前 or 番号
            </li>
            <li className={styles.edit_number_item}>2:ロースト</li>
            <li className={styles.edit_number_item}>3:アロマ</li>
            <li className={styles.edit_number_item}>4:欠点・瑕疵</li>
            <li className={styles.edit_number_item}>5:カップの綺麗さ</li>
            <li className={styles.edit_number_item}>6:甘さ</li>
            <li className={styles.edit_number_item}>7:酸の質</li>
            <li className={styles.edit_number_item}>8:口に含んだ質感</li>
            <li className={styles.edit_number_item}>9:フレーバー</li>
            <li className={styles.edit_number_item}>10:後味の印象度</li>
            <li className={styles.edit_number_item}>11:バランス</li>
            <li className={styles.edit_number_item}>12:総合評価</li>
            <li className={styles.edit_number_item}>
              13:TOTAL
              <br />
              （+36）
            </li>
            <li className={styles.edit_number_item}>14:味の印象</li>
          </ul>
        </div>

        <div className={styles.edit_data}>
          <form
            onSubmit={handleSubmit}
            className={styles.edit - main}
            action={"Select-page.js"}
            method="post"
          >
            <div className={styles.edit_list}>
              {/* 選択式 */}
              <div className={`${styles.edit_item} ${styles.edit_coffee}`}>
                <label htmlFor="coffee" className={styles.edit_item_title}>
                  1：珈琲豆 or 番号
                </label>
                <input
                  className={styles.edit_item_name_input}
                  type="text"
                  name="coffee"
                  id="coffee"
                  width={300}
                  height={50}
                  placeholder="名前 or 番号"
                  value={coffee}
                  onChange={(e) => setCoffee(e.target.value)}
                />
              </div>
              <div className={`${styles.edit_item} ${styles.edit_roast}`}>
                <label htmlFor="roast" className={styles.edit_item_title}>
                  2：ロースト
                </label>
                <div className={styles.edit_item_value_box}>
                  <input
                    type="range"
                    name="roast"
                    id="roast"
                    className={styles.edit_roast_gradient}
                    value={roast}
                    onChange={(e) => setRoast(e.target.value)}
                  />
                  <p className={styles.edit_roast_value}>%</p>
                  <p>
                    <span className={styles.edit_roast_lightly}>Lightly</span>➡
                    <span className={styles.edit_roast_dark}>dark</span>
                  </p>
                </div>
                <div className={styles.edit_item_message_box}>
                  <label htmlFor="roast-message">memo</label>
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="roast-message"
                    id="roast-message"
                    placeholder="ご記入ください。"
                    value={roastMessage}
                    onChange={(e) => setRoastMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_aroma}`}>
                <p className={styles.edit_item_title}>3：アロマ </p>
                <div className={styles.edit_item_value_box}>
                  <p className={styles.edit_item_value}>
                    <label htmlFor="aroma-dry">ドライ </label>－３～３
                    <select
                      name="aroma-dry"
                      id="aroma-dry"
                      value={aromaDry}
                      onChange={(e) => setAromaDry(e.target.value)}
                    >
                      <option defaultValue={0}></option>
                      <option value={-3}>-3</option>
                      <option value={-2}>-2</option>
                      <option value={-1}>-1</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                  </p>

                  <p className={styles.edit_item_value}>
                    <label htmlFor="aroma-crust">クラスト</label> －３～３
                    <select
                      name="aroma-crust"
                      id="aroma-crust"
                      value={aromaCrust}
                      onChange={(e) => setAromaCrust(e.target.value)}
                    >
                      <option defaultValue={0}></option>
                      <option value={-3}>-3</option>
                      <option value={-2}>-2</option>
                      <option value={-1}>-1</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                  </p>

                  <p className={styles.edit_item_value}>
                    <label htmlFor="aroma-break">ブレーク</label> －３～３
                    <select
                      name="aroma-break"
                      id="aroma-break"
                      value={aromaBreak}
                      onChange={(e) => setAromaBreak(e.target.value)}
                    >
                      <option defaultValue={0}></option>
                      <option value={-3}>-3</option>
                      <option value={-2}>-2</option>
                      <option value={-1}>-1</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                  </p>
                </div>
                <div className={styles.edit_item_message_box}>
                  <label htmlFor="aroma-message">memo</label>
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="aroma-message"
                    id="aroma-message"
                    placeholder="ご記入ください。"
                    value={aromaMessage}
                    onChange={(e) => setAromaMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_defects}`}>
                <label htmlFor="defects" className={styles.edit_item_title}>
                  4：欠点・瑕疵
                </label>
                <div className={styles.edit_item_value_box}>
                  <p className={styles.edit_defects_explanation}>
                    欠点等が無き場合は、黄色の枠内を０と記入にしてください。
                    <br />
                    <span>＃×ｉ×４＝【　】</span>
                  </p>
                  <div className={styles.edit_defects_calc}>
                    <input
                      type="number"
                      className={styles.edit_defects_point}
                      value={point}
                      onChange={(e) => setPoint(e.target.value)}
                      name="point"
                    />
                    ×
                    <select
                      type="number"
                      className={styles.edit_defects_score}
                      onChange={(e) => setScore(e.target.value)}
                      value={score}
                      name="score"
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                    ×４＝
                    <output
                      name="defects"
                      onChange={defectsAnswer}
                      className={styles.edit_defects_answer}
                    >
                      {point * score * 4}
                    </output>
                  </div>
                  <input
                    type="number"
                    name="defects"
                    id="defects"
                    className={styles.edit_item_box}
                    value={defects}
                    onChange={(e) => setDefects(e.target.value)}
                  />
                  <div className={styles.edit_item_message_box}>
                    <label htmlFor="defects-message"></label>memo
                    <br />
                    <textarea
                      className={styles.edit_item_message}
                      name="defects-message"
                      id="defects-message"
                      placeholder="ご記入ください。"
                      value={defectsMessage}
                      onChange={(e) => setDefectsMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_cleancap}`}>
                <label htmlFor="cleancap" className={styles.edit_item_title}>
                  5：カップの綺麗さ
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <select
                      type="number"
                      name="cleancap"
                      id="cleancap"
                      className={styles.edit_item_box}
                      value={cleancap}
                      onChange={(e) => setCleancap(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>

                  <div className={styles.edit_item_message_box}>
                    <label htmlFor="cleancap-message">
                      <label htmlFor="cleancap-message">memo</label>
                    </label>
                    <br />
                    <textarea
                      className={styles.edit_item_message}
                      name="cleancap-message"
                      id="cleancap-message"
                      placeholder="ご記入ください。"
                      value={cleancapMessage}
                      onChange={(e) => setCleancapMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_sweet}`}>
                <label htmlFor="sweet" className={styles.edit_item_title}>
                  6：甘さ
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <select
                      type="number"
                      name="sweet"
                      id="sweet"
                      className={styles.edit_item_box}
                      value={sweet}
                      onChange={(e) => setSweet(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                  <div className={styles.edit_item_message_box}>
                    <label htmlFor="sweet-message">memo</label>
                    <br />
                    <textarea
                      className={styles.edit_item_message}
                      name="sweet-message"
                      id="sweet-message"
                      placeholder="ご記入ください。"
                      value={sweetMessage}
                      onChange={(e) => setSweetMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_acidity}`}>
                <label htmlFor="acidity" className={styles.edit_item_title}>
                  7：酸の質
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <select
                      type="number"
                      name="acidity"
                      id="acidity"
                      className={styles.edit_item_box}
                      value={acidity}
                      onChange={(e) => setAcidity(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                  <div className={styles.edit_item_value}>
                    酸の強さ
                    <br />
                    <select
                      name="acidity"
                      value={acidityStrength}
                      onChange={(e) => setAcidityStrength(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <optgroup label="High">
                        <option>{"H2"}</option>
                        <option>{"H1"}</option>
                      </optgroup>
                      <optgroup label="Middle">
                        <option>{"M2"}</option>
                        <option>{"M1"}</option>
                      </optgroup>
                      <optgroup label="Low">
                        <option>{"L2"}</option>
                        <option>{"L1"}</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className={styles.edit_item_message_box}>
                  <label htmlFor="acidity-message">memo</label>
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="acidity-message"
                    id="acidity-message"
                    placeholder="ご記入ください。"
                    value={acidityMessage}
                    onChange={(e) => setAcidityMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_mouthfeel}`}>
                <label htmlFor="mouthfeel" className={styles.edit_item_title}>
                  8：口に含んだ質感{" "}
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <select
                      type="number"
                      name="mouthfeel"
                      id="mouthfeel"
                      className={styles.edit_item_box}
                      value={mouthfeel}
                      onChange={(e) => setMouthfeel(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                  <div className={styles.edit_item_value}>
                    Bodyの強さ
                    <br />
                    <select
                      name="body"
                      value={bodyStrength}
                      onChange={(e) => setBodyStrength(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <optgroup label="High">
                        <option>{"H2"}</option>
                        <option>{"H1"}</option>
                      </optgroup>
                      <optgroup label="Middle">
                        <option>{"M2"}</option>
                        <option>{"M1"}</option>
                      </optgroup>
                      <optgroup label="Low">
                        <option>{"L2"}</option>
                        <option>{"L1"}</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className={styles.edit_item_message_box}>
                  <label htmlFor="mouthfeel-message">memo</label>
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="mouthfeel-message"
                    id="mouthfeel-message"
                    placeholder="ご記入ください。"
                    value={mouthfeelMessage}
                    onChange={(e) => setMouthfeelMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_flavor}`}>
                <label htmlFor="flavor" className={styles.edit_item_title}>
                  9：フレーバー
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <select
                      name="flavor"
                      type="number"
                      id="flavor"
                      className={styles.edit_item_box}
                      value={flavor}
                      onChange={(e) => setFlavor(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                  <div className={styles.edit_item_message_box}>
                    <label htmlFor="flavor-message">memo</label>
                    <br />
                    <textarea
                      className={styles.edit_item_message}
                      name="flavor-message"
                      id="flavor-message"
                      placeholder="ご記入ください。"
                      value={flavorMessage}
                      onChange={(e) => setFlavorMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className={`${styles.edit_item} ${styles.edit_after}`}>
                <label htmlFor="after" className={styles.edit_item_title}>
                  10：後味の印象度{" "}
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <select
                      name="after"
                      type="number"
                      id="after"
                      className={styles.edit_item_box}
                      value={after}
                      onChange={(e) => setAfter(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>

                  <div className={styles.edit_item_message_box}>
                    <label htmlFor="after-message">memo</label>
                    <br />
                    <textarea
                      className={styles.edit_item_message}
                      name="after-message"
                      id="after-message"
                      placeholder="ご記入ください。"
                      value={afterMessage}
                      onChange={(e) => setAfterMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_balance}`}>
                <label htmlFor="balance" className={styles.edit_item_title}>
                  11：バランス{" "}
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <select
                      name="balance"
                      type="number"
                      id="balance"
                      className={styles.edit_item_box}
                      value={balance}
                      onChange={(e) => setBalance(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                </div>
                <div className={styles.edit_item_message_box}>
                  <label htmlFor="balance-message">memo</label>
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="balance-message"
                    id="balance-message"
                    placeholder="ご記入ください。"
                    value={balanceMessage}
                    onChange={(e) => setBalanceMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_overall}`}>
                <label htmlFor="overall" className={styles.edit_item_title}>
                  12：総合評価
                </label>
                <div className={styles.edit_item_value_box}>
                  <div className={styles.edit_item_value}>
                    ０～８
                    <select
                      name="overall"
                      type="number"
                      id="overall"
                      className={styles.edit_item_box}
                      value={overall}
                      onChange={(e) => setOverall(e.target.value)}
                    >
                      <option defaultValue={null}>{null}</option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={6.5}>6.5</option>
                      <option value={7}>7</option>
                      <option value={7.5}>7.5</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_total}`}>
                <label htmlFor="total" className={styles.edit_item_title}>
                  13：TOTAL（+36）
                </label>
                <div className={styles.edit_result}>
                  <p>下記の空白に項目４～１２を加算した数字が出力。</p>
                  <button
                    onClick={handleCalculation}
                    className={styles.edit_btn}
                  >
                    押す
                  </button>
                  <div className={styles.edit_addition}>
                    <input
                      type="number"
                      className={styles.edit_sub_value}
                      value={result}
                      onChange={handleCalculation}
                    />
                    <span className={styles.edit_basic}>＋３６</span>
                  </div>
                  <p>TOTAL値</p>
                  {/* <output></output> */}
                  <output
                    htmlFor="addition"
                    id="total"
                    className={styles.edit_total_value}
                  >
                    {result + 36}
                  </output>
                </div>
              </div>
              <div className={`${styles.edit_item} ${styles.edit_impression}`}>
                <label htmlFor="impression" className={styles.edit_item_title}>
                  14：味の印象
                </label>
                <div className={styles.edit_item_message_box}>
                  memo
                  <br />
                  <textarea
                    className={styles.edit_item_message}
                    name="impression"
                    id="impression"
                  ></textarea>
                </div>
              </div>
              {/* ErrorMessage */}
              {error && (
                <span
                  onChange={(e) => setError(e.target.value)}
                  className="edit-error"
                >
                  {error}
                </span>
              )}
            </div>
            <div className={styles.edit_submit_box}>
              <button
                type="submit"
                className={styles.edit_submit_btn}
                onClick={handleSubmit}
              >
                作成する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
Edit();
