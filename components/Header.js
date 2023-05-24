import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
// import Link from "next/link";

export function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_title}>
        <h1 className={styles.title}>Tasting Note</h1>
      </div>
      <div className={styles.header_button}>
        <button
          className={
            isActive
              ? `${styles["button"]} ${styles["active"]}`
              : styles["button"]
          }
          onClick={handleButtonClick}
        >
          <span className={styles.button_item}></span>
          <span className={styles.button_item}></span>
          <span className={styles.button_item}></span>
        </button>
      </div>
      <nav
        className={
          isActive ? `${styles["menu"]} ${styles["active"]}` : styles["menu"]
        }
      >
        <ul className={styles.menu_list}>
          <li className={styles.menu_item}>New</li>
          <li className={styles.menu_item}>Delete</li>
          <li className={styles.menu_item}>保存</li>
          <li className={styles.menu_item}>管理</li>
          <li className={styles.menu_item}>編集</li>
        </ul>
      </nav>
    </header>
  );
}
