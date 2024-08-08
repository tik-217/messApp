// entities
import { IAuthrInput } from "@/entities/AuthInput/types/AuthInput.types";

// ui
import styles from "../ui/AuthInput.module.scss";

export default function AuthInput({
  type,
  placeholder,
  name,
  errorType,
  touched,
  value,
  onBlur,
  handleChange,
}: IAuthrInput) {
  return (
    <section className={styles.formItemSection}>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={handleChange}
        value={value}
        className={styles.formItemSection__item}
      />
      <span className={styles.formItemSection__errorText}>
        {touched && errorType ? <div>{errorType}</div> : null}
      </span>
    </section>
  );
}
