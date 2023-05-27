import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export function Top() {
  return (
    <div className={styles.top}>
      <h1 className={styles.title}>Tasting Note</h1>
      <nav className={styles.top_nav}>
        <ul className={styles.top_nav_list}>
          <li className={styles.top_nav_item}>
            <Link href="new_select">新規作成</Link>
          </li>
          <li className={styles.top_nav_item}>
            <Link href="edit_select">編集ページ</Link>
          </li>
          <li className={styles.top_nav_item}>MyPage</li>
        </ul>
      </nav>
    </div>
  );
}
Top();
