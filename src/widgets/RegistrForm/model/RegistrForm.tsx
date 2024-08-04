"use client";

// next
import Link from "next/link";

// formik
import { useFormik } from "formik";

// feature
import RegistrInputsList from "@/feature/RegistrInputsList/model/RegistrInputsList";

// entities
import BtnMainAction from "@/entities/BtnMainAction/model/BtnMainAction";

// styles
import styles from "../ui/RegistrForm.module.scss";

// utils
import { validate } from "../utils/validate";

export default function RegistrForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      type IKey = keyof typeof formik.values;

      for (const key in values) {
        formik.values[key as IKey] = values[key as IKey].trim();
      }
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <RegistrInputsList
        errors={formik.errors}
        value={formik.values}
        touched={formik.touched}
        handleChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <div className={styles.formBtns}>
        <BtnMainAction btnText={"Зарегистрироваться"} btnColor={"gradient"} />
        <Link href={"/login"} className={styles.formBtns__login}>
          <BtnMainAction btnText={"Войти"} btnColor={"solid"} />
        </Link>
      </div>
    </form>
  );
}
