// widgets
import RegistrForm from "@/widgets/RegistrForm/model/RegistrForm";

// styles
import styles from "../ui/Registration.module.scss";

export default function Registration() {
  return (
    <div className={styles.registr}>
      <h2 className={styles.registr__title}>Регистрация</h2>
      <RegistrForm />
    </div>
  );
}
