import SignUp from '../components/SignUp'; // Composant d'inscription
import SignIn from '../components/SignIn'; // Composant de connexion
import styles from './page.module.css';

export default function SignPage() {
  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  )
}
