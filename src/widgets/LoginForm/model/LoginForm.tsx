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
import { formTrim } from "@/shared/services/formTrim";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseApp from "@/root/initFirebase";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { setIsLoading } from "@/shared/store/reducer";

export default function LoginForm() {
  const auth = getAuth(firebaseApp);

  const isLoading = useAppSelector((state) => state.formState.isLoading);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      formTrim(values);
      dispatch(setIsLoading(true));

      signInWithEmailAndPassword(auth, values.emailOrPhone, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        })
        .finally(() => {
          dispatch(setIsLoading(false));
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

  // V3m-W8W-uyt-2F5

  return (
    <>
      {!isLoading ? (
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
      ) : (
        <>...Loading</>
      )}
    </>
  );
}
