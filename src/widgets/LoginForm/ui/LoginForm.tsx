"use client";

// next / react
import Link from "next/link";

// store
import { useAppSelector } from "@/shared/store/hooks";
import useSignIn from "@/shared/hooks/useSignIn";

// widgets
import useFormAuth from "@/widgets/LoginForm/hooks/useFormAuth";

// feature
import LoginInputsList from "@/feature/LoginInputsList/ui/LoginInputsList";

// entities
import BtnMainAction from "@/entities/BtnMainAction/ui/BtnMainAction";

// shared
import useCheckAuth from "@/shared/hooks/useCheckAuth";
import useRedirectTo from "@/shared/hooks/useRedirectTo";

// styles
import styles from "../ui/Login.module.scss";

export default function LoginForm() {
  const isLoading = useAppSelector((state) => state.formState.isLoading);
  const generalErrorLogin = useAppSelector(
    (state) => state.authState.generalErrorLogin
  );

  const formik = useFormAuth();

  useSignIn({
    isSubmitting: formik.isSubmitting,
    isValid: formik.isValid,
    emailOrPhoneValue: formik.values.emailOrPhone,
    passwordValue: formik.values.password,
  });

  useCheckAuth({ isSubmitting: formik.isSubmitting, isValid: formik.isValid });

  useRedirectTo();

  return (
    <>
      {isLoading ? (
        <>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            {generalErrorLogin && <p>Возникла ошибка при аутенфикации</p>}
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
        </>
      ) : (
        <>...Loading</>
      )}
    </>
  );
}
