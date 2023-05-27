import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
// import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export function New() {
  return (
    <div className={styles.edit_page}>
      <div className={styles.edit}>
        <div className={styles.edit_number}>
          <div className={styles.edit_toc}>
            <button>
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
          {/* <form
                  onSubmit={handleSubmit}
                  className={styles.edit-main}
                  action={"Select-page.js"}
                  method="post"
                > */}
          <div className={styles.edit_list}>
            {/* 選択式 */}
            <div className={`${styles.edit_item} ${styles.coffee_name}`}>
              <label htmlFor="coffee-name" className={styles.edit_item_title}>
                1：珈琲豆 or 番号
              </label>
              <input
                className={styles.edit_item_name_input}
                type="text"
                name="coffee-name"
                id="coffee-name"
                width={300}
                height={50}
                placeholder="名前 or 番号"
                // value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={`${styles.edit_item} ${styles.roast}`}>
              <label htmlFor="roast" className={styles.edit_item_title}>
                2：ロースト
              </label>
              <div className={styles.edit_item_value_box}>
                <input
                  type="range"
                  name="roast"
                  id="roast"
                  className={styles.edit_roast_gradient}
                  // value={roast}
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
                  // value={roastMessage}
                  onChange={(e) => setRoastMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className={`${styles.edit_item} ${styles.aroma}`}>
              <p className={styles.edit_item_title}>3：アロマ </p>
              <div className={styles.edit_item_value_box}>
                <p className={styles.edit_item_value}>
                  <label htmlFor="aroma-dry">ドライ </label>－３～３
                  <select
                    name="aroma-dry"
                    id="aroma-dry"
                    // value={aromaDry}
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
                    // value={aromaCrust}
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
                    // value={aromaBreak}
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
                  // value={aromaMessage}
                  onChange={(e) => setAromaMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className={`${styles.edit_item} ${styles.defects}`}>
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
                    // value={point}
                    onChange={(e) => setPoint(e.target.value)}
                    name="point"
                  />
                  ×
                  <select
                    type="number"
                    className={styles.edit_defects_score}
                    onChange={(e) => setScore(e.target.value)}
                    // value={score}
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
                    // onChange={defectsAnswer}
                    className={styles.edit_defects_answer}
                  >
                    {/* {point * score * 4} */}
                  </output>
                </div>
                <input
                  type="number"
                  name="defects"
                  id="defects"
                  className={styles.edit_item_box}
                  // value={defects}
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
                    // value={defectsMessage}
                    onChange={(e) => setDefectsMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className={`${styles.edit_item} ${styles.cleancap}`}>
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
                    // value={cleancap}
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
                    // value={cleancapMessage}
                    onChange={(e) => setCleancapMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className={`${styles.edit_item} ${styles.sweet}`}>
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
                    // value={sweet}
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
                    // value={sweetMessage}
                    onChange={(e) => setSweetMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className={`${styles.edit_item} ${styles.acidity}`}>
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
                    // value={acidity}
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
                    // value={acidityStrength}
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
            </div>
            <div className={`${styles.edit_item} ${styles.mouthfeel}`}>
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
                    // value={mouthfeel}
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
                    // value={bodyStrength}
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
            </div>
            <div className={`${styles.edit_item} ${styles.flavor}`}>
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
                    // value={flavor}
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
                    // value={flavorMessage}
                    onChange={(e) => setFlavorMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className={`${styles.edit_item} ${styles.after}`}>
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
                    // value={after}
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
                    // value={afterMessage}
                    onChange={(e) => setAfterMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className={`${styles.edit_item} ${styles.balance}`}>
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
                    // value={balance}
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
            </div>
            <div className={`${styles.edit_item} ${styles.overall}`}>
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
                    // value={overall}
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
            <div className={`${styles.edit_item} ${styles.total}`}>
              <label htmlFor="total" className={styles.edit_item_title}>
                13：TOTAL（+36）
              </label>
              <div className={styles.edit_result}>
                <p>下記の空白に項目４～１２を加算した数字が出力。</p>
                <button
                  // onClick={handleCalculation}
                  className={styles.edit_btn}
                >
                  押す
                </button>
                <div className={styles.edit_addition}>
                  <input
                    type="number"
                    className={styles.edit_subtotal}
                    // value={result}
                    // onChange={handleCalculation}
                  />
                  <span className={styles.edit_basic}>＋３６</span>
                </div>
                <p>TOTAL値</p>
                <output></output>
                <output
                  htmlFor="addition"
                  id="total"
                  className={styles.edit_total}
                >
                  {/* {result + 36} */}
                </output>
                <input type="number" id="total" />
              </div>
            </div>
            <div className={`${styles.edit_item} ${styles.impression}`}>
              <label htmlFor="impression" className={styles.edit_item_title}>
                14：味の印象{" "}
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
            {/* {error && ( */}
            {/*   <span */}
            {/* onChange={(e) => setError(e.target.value)} */}
            {/* className={styles.edit-error" */}
            {/* > */}
            {/* {error} */}
            {/* </span> */}
            {/* )} */}
          </div>{" "}
          <div className={styles.edit_submit_box}>
            <button
              type="submit"
              className={styles.edit_submit_btn}
              // onClick={handleSubmit}
            >
              作成する
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>

    // <form action="" method="post" className={styles.popup}>
    //   <div className={styles.edit_select_list}>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_number}`}
    //     >
    //       <p>1</p>
    //     </div>
    //     <button
    //       className={`${styles.edit_select_item} ${styles.edit_select_btn}`}
    //     >
    //       {/* <Link href="edit_page"> */}
    //       <Image
    //         src="../images/edit_FILL0_wght400_GRAD0_opsz48.svg"
    //         alt="編集画像"
    //         width={48}
    //         height={48}
    //         priority
    //       />
    //       {/* </Link> */}
    //     </button>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_coffee}`}
    //     >
    //       <label htmlFor="name" className={styles.edit_select_item_title}>
    //         珈琲豆の名 or 番号
    //         {/* NAME or NUMBER */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_roast}`}
    //     >
    //       <label htmlFor="roast" className={styles.edit_select_item_title}>
    //         ロースト
    //         {/* ROAST */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_aroma}`}
    //     >
    //       <label htmlFor="aroma" className={styles.edit_select_item_title}>
    //         アロマ
    //         {/* AROMA */}
    //       </label>
    //       <div className={styles.edit_select_item_value}>
    //         <p className={styles.edit_select_aroma_value}>D：</p>
    //         <p className={styles.edit_select_aroma_value}>C：</p>
    //         <p className={styles.edit_select_aroma_value}>B：</p>
    //       </div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_defects}`}
    //     >
    //       <label htmlFor="defects" className={styles.edit_select_item_title}>
    //         欠点・瑕疵
    //         {/* DEFECTS */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_cleancap}`}
    //     >
    //       <label htmlFor="cleancap" className={styles.edit_select_item_title}>
    //         カップの綺麗さ
    //         {/* CLEAN CAP */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_sweet}`}
    //     >
    //       <label htmlFor="sweet" className={styles.edit_select_item_title}>
    //         甘さ
    //         {/* SWEET */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_acidity}`}
    //     >
    //       <label htmlFor="acidity" className={styles.edit_select_item_title}>
    //         酸の質
    //         {/* ACIDITY */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_mouthfeel}`}
    //     >
    //       <label htmlFor="mouthfeel" className={styles.edit_select_item_title}>
    //         口に含んだ質感
    //         {/* MOUTHFEEL */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_flavor}`}
    //     >
    //       <label htmlFor="flavor" className={styles.edit_select_item_title}>
    //         フレーバー
    //         {/* FLAVOR */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_after}`}
    //     >
    //       <label htmlFor="after" className={styles.edit_select_item_title}>
    //         後味の印象度
    //         {/* AFTER */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div className={`${styles.edit_select_item} ${styles.balance}`}>
    //       <label htmlFor="balance" className={styles.edit_select_item_title}>
    //         バランス
    //         {/* BALANCE */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_overall}`}
    //     >
    //       <label htmlFor="overall" className={styles.edit_select_item_title}>
    //         総合評価
    //         {/* OVER ALL */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_total}`}
    //     >
    //       <label htmlFor="total" className={styles.edit_select_item_title}>
    //         TOTAL
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //     <div
    //       className={`${styles.edit_select_item} ${styles.edit_select_impression}`}
    //     >
    //       <label htmlFor="impression" className={styles.edit_select_item_title}>
    //         味の印象
    //         {/* IMPRESSION */}
    //       </label>
    //       <div className={styles.edit_select_item_value}></div>
    //     </div>
    //   </div>
    // </form>
  );
}
New();
