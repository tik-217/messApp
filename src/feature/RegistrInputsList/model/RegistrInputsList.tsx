// feature
import { IRegistrInputsListProps } from "@/feature/RegistrInputsList/model/RegistrInputsList.types";

// entities
import AuthInput from "@/entities/AuthInput/model/AuthInput";

// styles
import styles from "../ui/RegistrInputsList.module.scss";

export default function RegistrInputsList({
  errors,
  value,
  touched,
  onBlur,
  handleChange,
}: IRegistrInputsListProps) {
  return (
    <div className={styles.formInputs}>
      <AuthInput
        type={"text"}
        placeholder={"Имя"}
        name={"firstName"}
        errorType={errors.firstName}
        touched={touched.firstName}
        value={value.firstName}
        onBlur={onBlur}
        handleChange={handleChange}
      />
      <AuthInput
        type={"text"}
        placeholder={"Фамилия"}
        name={"lastName"}
        errorType={errors.lastName}
        touched={touched.lastName}
        value={value.lastName}
        onBlur={onBlur}
        handleChange={handleChange}
      />
      <AuthInput
        type={"phone"}
        placeholder={"Номер телеофна"}
        name={"phone"}
        errorType={errors.phone}
        touched={touched.phone}
        value={value.phone}
        onBlur={onBlur}
        handleChange={handleChange}
      />
      <AuthInput
        type={"email"}
        placeholder={"Email"}
        name={"email"}
        errorType={errors.email}
        touched={touched.email}
        value={value.email}
        onBlur={onBlur}
        handleChange={handleChange}
      />
    </div>
  );
}
