import Link from "next/link";
import style from "@/styles/NotFound404.module.css";
import { Paprika } from "next/font/google";

const paprika = Paprika({ subsets: ["latin"], weight: ["400"] });

export default function NotFound404() {
  return (
    <main className={style.notFoundBackground}>
      <div className={style.notFoundContainer}>
        <div className={style.notFoundElements}>
          <div className={paprika.className}>
            <h1 className={style.title}>404</h1>
            <p className={style.text}>Page not found</p>
            <Link className={style.goHome} href="/">
              GO TO HOME
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
