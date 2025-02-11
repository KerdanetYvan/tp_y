import styles from "./page.module.css";
import SignUp from "./components/SignUp";
import Coffs from "./components/Coff";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <aside className={styles.aside_left}></aside>
        <main className={styles.main}></main>
        <aside className={styles.aside_right}></aside>
      </div>
      <Coffs />
    </div>
  );
}
