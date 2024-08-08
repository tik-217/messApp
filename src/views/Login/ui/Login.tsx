// widgets
import LoginForm from "@/widgets/LoginForm/ui/LoginForm";

// styles
import styles from "../ui/Login.module.scss";

export default function Login() {
  return (
    <div className={styles.login}>
      <h2 className={styles.login__title}>Войти</h2>
      <LoginForm />
    </div>
  );
}
