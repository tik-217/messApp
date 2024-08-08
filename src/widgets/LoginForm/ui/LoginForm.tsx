"use client";

// next / react
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// firebase
// import { getDatabase } from "firebase/database";

// store
import { useAppSelector } from "@/shared/store/hooks";
import useSignIn from "@/shared/hooks/useSignIn";

// widgets
import useFormAuth from "@/widgets/LoginForm/hooks/useFormAuth";

// feature
import LoginInputsList from "@/feature/LoginInputsList/ui/LoginInputsList";

// entities
import BtnMainAction from "@/entities/BtnMainAction/ui/BtnMainAction";

// styles
import styles from "../ui/Login.module.scss";

export default function LoginForm() {
  const router = useRouter();
  const formik = useFormAuth();
  const isAuth = useSignIn({
    isSubmitting: formik.isSubmitting,
    isValid: formik.isValid,
    emailOrPhoneValue: formik.values.emailOrPhone,
    passwordValue: formik.values.password,
  });

  const isLoading = useAppSelector((state) => state.formState.isLoading);

  useEffect(() => {
    isAuth && router.push("/");
  }, [isAuth, router]);

  return (
    <>
      {isLoading ? (
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
