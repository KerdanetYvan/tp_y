import styles from "./page.module.css";
import SignUp from "./components/SignUp";
import style from "./page.module.css";
export default function Home() {
  return (
    <div>
      <div className={styles.container_content}>
        <aside className={styles.aside_left}></aside>
        <main className={styles.main}></main>
        <aside className={styles.aside_right}></aside>
      </div>
    </div>
  );
}
