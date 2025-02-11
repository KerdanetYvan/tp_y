import styles from "./page.module.css";
import SignUp from "./components/SignUp";
import Coffs from "./components/Coffs";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Page d'accueil</h1>
      <Coffs />
    </div>
  );
}
