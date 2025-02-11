"use client"
import styles from "./page.module.css";
import SignUp from "./components/SignUp";
import style from "./page.module.css";
import Coffs from "./components/Coffs";
export default function Home() {
  return (
    <div>
      <div className={styles.container_content}>
        <aside className={styles.aside_left}></aside>
        <main className={styles.main}>
          <section>
            <Coffs />
          </section>
          <section>
            Page
          </section>
        </main>
        <aside className={styles.aside_right}></aside>
      </div>
      <Coffs />
    </div>
  );
}
