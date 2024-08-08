"use client";

// next /react
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MutableRefObject, useEffect, useRef } from "react";

// formik
import { useFormik } from "formik";

// feature
import RegistrInputsList from "@/feature/RegistrInputsList/ui/RegistrInputsList";

// entities
import BtnMainAction from "@/entities/BtnMainAction/ui/BtnMainAction";

// styles
import styles from "./RegistrForm.module.scss";

// hooks
import useSignUp from "@/shared/hooks/useSignUp";

// utils
import { validate } from "../utils/validate";
import { formTrim } from "@/shared/services/formTrim";
import { useAppSelector } from "@/shared/store/hooks";
// import { getDatabase, ref, set } from "firebase/database";

export default function RegistrForm() {
  const router = useRouter();

  const userAlreadyRegistered = useAppSelector(
    (state) => state.userState.userAlreadyExist
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      formTrim(values);

      // onAuthStateChanged(auth, (user) => {
      //   if (user) {
      //     const uid = user.uid;
      //   } else {
      //   }
      // });
      formik.setSubmitting(false);
    },
  });

  const isAuth = useSignUp({
    isSubmitting: formik.isSubmitting,
    isValid: formik.isValid,
    email: formik.values.email,
    password: formik.values.password,
  });

  useEffect(() => {
    isAuth && router.push("/");
  }, [isAuth, router]);

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      {userAlreadyRegistered && (
        <p>
          Пользователь уже зарегистрирован. Попробуйте{" "}
          <Link href={"/login"}>войти</Link> по логину и паролю
        </p>
      )}
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
