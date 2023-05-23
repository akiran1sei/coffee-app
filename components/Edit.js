import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
// import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export function Edit() {
  return (
    <form action="" method="post" className={styles.popup}>
      {/* <SelectPc />
      <SelectSp /> */}
      <div className={styles.edit_select_list}>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_number}`}
        >
          <p>1</p>
        </div>
        <button
          className={`${styles.edit_select_item} ${styles.edit_select_btn}`}
        >
          {/* <Link href="edit_page"> */}
          <Image
            src="../images/edit_FILL0_wght400_GRAD0_opsz48.svg"
            alt="編集画像"
            width={48}
            height={48}
            priority
          />
          {/* </Link> */}
        </button>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_coffee}`}
        >
          <label htmlFor="name" className={styles.edit_select_item_title}>
            珈琲豆の名 or 番号
            {/* NAME or NUMBER */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_roast}`}
        >
          <label htmlFor="roast" className={styles.edit_select_item_title}>
            ロースト
            {/* ROAST */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_aroma}`}
        >
          <label htmlFor="aroma" className={styles.edit_select_item_title}>
            アロマ
            {/* AROMA */}
          </label>
          <div className={styles.edit_select_item_value}>
            <p className={styles.edit_select_aroma_value}>D：</p>
            <p className={styles.edit_select_aroma_value}>C：</p>
            <p className={styles.edit_select_aroma_value}>B：</p>
          </div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_defects}`}
        >
          <label htmlFor="defects" className={styles.edit_select_item_title}>
            欠点・瑕疵
            {/* DEFECTS */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_cleancap}`}
        >
          <label htmlFor="cleancap" className={styles.edit_select_item_title}>
            カップの綺麗さ
            {/* CLEAN CAP */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_sweet}`}
        >
          <label htmlFor="sweet" className={styles.edit_select_item_title}>
            甘さ
            {/* SWEET */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_acidity}`}
        >
          <label htmlFor="acidity" className={styles.edit_select_item_title}>
            酸の質
            {/* ACIDITY */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_mouthfeel}`}
        >
          <label htmlFor="mouthfeel" className={styles.edit_select_item_title}>
            口に含んだ質感
            {/* MOUTHFEEL */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_flavor}`}
        >
          <label htmlFor="flavor" className={styles.edit_select_item_title}>
            フレーバー
            {/* FLAVOR */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_after}`}
        >
          <label htmlFor="after" className={styles.edit_select_item_title}>
            {/* AFTER */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div className={`${styles.edit_select_item} ${styles.balance}`}>
          <label htmlFor="balance" className={styles.edit_select_item_title}>
            {/* BALANCE */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_overall}`}
        >
          <label htmlFor="overall" className={styles.edit_select_item_title}>
            総合評価
            {/* OVER ALL */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_total}`}
        >
          <label htmlFor="total" className={styles.edit_select_item_title}>
            TOTAL
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
        <div
          className={`${styles.edit_select_item} ${styles.edit_select_impression}`}
        >
          <label htmlFor="impression" className={styles.edit_select_item_title}>
            味の印象
            {/* IMPRESSION */}
          </label>
          <div className={styles.edit_select_item_value}></div>
        </div>
      </div>
    </form>
  );
}
Edit();
