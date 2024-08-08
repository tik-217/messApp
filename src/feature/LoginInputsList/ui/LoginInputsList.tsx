// entities
import AuthInput from "@/entities/AuthInput/ui/AuthInput";

// shared
import { ILoginInputsListProps } from "../types/LoginInputsList.types";

// styles
import styles from "../ui/LoginInputsList.module.scss";

export default function LoginInputsList({
  errors,
  value,
  touched,
  onBlur,
  handleChange,
}: ILoginInputsListProps) {
  return (
    <div className={styles.formInputs}>
      <AuthInput
        type={"text"}
        placeholder={"Email или телефон"}
        name={"emailOrPhone"}
        errorType={errors.emailOrPhone}
        touched={touched.emailOrPhone}
        value={value.emailOrPhone}
        onBlur={onBlur}
        handleChange={handleChange}
      />
      <AuthInput
        type={"password"}
        placeholder={"Пароль"}
        name={"password"}
        errorType={errors.password}
        touched={touched.password}
        value={value.password}
        onBlur={onBlur}
        handleChange={handleChange}
      />
    </div>
  );
}
