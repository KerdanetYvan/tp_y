import styles from "./page.module.css";
import SignUp from "./components/SignUp";
import style from "./page.module.css";
export default function Home() {
  return (
    <div>
        <h1>Page d'accueil</h1>
      <div className={styles.container_content}>
        <aside className={styles.aside_left}>gauche</aside>
        <main className={styles.main}>milieu</main>
        <aside className={styles.aside_right}>droite</aside>
      </div>
    </div>
  );
}
