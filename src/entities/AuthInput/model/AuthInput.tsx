// entities
import { IAuthrInput } from "@/entities/AuthInput/model/AuthInput.types";

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
        className={styles.formItemSection__item}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
      />
      <span className={styles.formItemSection__errorText}>
        {touched && errorType ? <div>{errorType}</div> : null}
      </span>
    </section>
  );
}
