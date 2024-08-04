"use client";

// next
import Link from "next/link";

// formik
import { useFormik } from "formik";

// feature
import LoginInputsList from "@/feature/LoginInputsList/model/LoginInputsList";

// entities
import BtnMainAction from "@/entities/BtnMainAction/model/BtnMainAction";

// validate
import { validate } from "../utils/validate";

// styles
import styles from "../ui/Login.module.scss";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      formik.values.emailOrPhone = values.emailOrPhone.trim();
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <LoginInputsList
        errors={formik.errors}
        touched={formik.touched}
        value={formik.values}
        onBlur={formik.handleBlur}
        handleChange={formik.handleChange}
      />
      <BtnMainAction btnText={"Войти"} btnColor={"gradient"} />
      <div className={styles.formBtns}>
        <Link href={"/registration"} className={styles.formBtns__item}>
          <BtnMainAction btnText={"Регистрация"} btnColor={"solid"} />
        </Link>
        <Link href={"/"} className={styles.formBtns__item}>
          <BtnMainAction btnText={"Забыли пароль?"} btnColor={"solid"} />
        </Link>
      </div>
    </form>
  );
}
