"use client";

// next
import Link from "next/link";

// firebase/auth
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import app from "@/root/initFirebase";

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
import { formTrim } from "@/shared/services/formTrim";

export default function RegistrForm() {
  const auth = getAuth(app);

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
      type IKey = keyof typeof formik.values;

      for (const key in values) {
        formik.values[key as IKey] = values[key as IKey].trim();
      }

      formTrim(formik.values);

      createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
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
