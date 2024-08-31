'use client';

import Link from "next/link";
import style from "@/styles/NotFound404.module.css";
import { Paprika } from "next/font/google";

const paprika = Paprika({ subsets: ["latin"], weight: ["400"] });

export default function NotFound404({ labels }) {
  const not_found = labels?.not_found || "Page not found";
  const go_home = labels?.go_home || "GO TO HOME";

  return (
    <main className={style.notFoundBackground}>
      <div className={style.notFoundContainer}>
        <div className={style.notFoundElements}>
          <div className={paprika.className}>
            <h1 className={style.title}>404</h1>
            <p className={style.text}>{not_found}</p>
            <Link className={style.goHome} href="/">
              {go_home}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
