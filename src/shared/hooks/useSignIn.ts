// react
import { useEffect } from "react";

// firebase
import app from "@/root/initFirebase";
import {
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth/web-extension";

// services
import checkTwoStrings from "@/shared/services/checkTwoStrings";

// store
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { setIsLoading } from "@/shared/store/formSlice/formSlice";
import { setUserEmail } from "@/shared/store/userSlice/userSlice";
import {
  setGeneralErrorLogin,
  setLoginInvalidCred,
} from "@/shared/store/authSlice/authSlice";

interface IUseSignIn {
  isSubmitting: boolean;
  isValid: boolean;
  emailOrPhoneValue: string;
  passwordValue: string;
}

export default function useSignIn({
  isSubmitting,
  isValid,
  emailOrPhoneValue,
  passwordValue,
}: IUseSignIn) {
  const generalErrorLogin = useAppSelector(
    (state) => state.authState.generalErrorLogin
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsLoading(true));

    if (isSubmitting && isValid) {
      dispatch(setGeneralErrorLogin(false));
      const auth = getAuth(app);

      signInWithEmailAndPassword(auth, emailOrPhoneValue, passwordValue)
        .then((userCredential) => {
          const userEmail = userCredential.user.email;

          userEmail && dispatch(setUserEmail(userEmail));
        })
        .catch((error) => {
          const errorCode = error.code;

          const invalidCredential = "invalid-credential";

          const isInvalidCredential = checkTwoStrings({
            errorCode,
            errorType: invalidCredential,
          });

          dispatch(setLoginInvalidCred(isInvalidCredential));
          dispatch(setGeneralErrorLogin(true));
        })
        .finally(() => {
          if (generalErrorLogin) {
            dispatch(setIsLoading(false));
          } else {
            dispatch(setIsLoading(true));
          }
        });
    }
  }, [isSubmitting, isValid, generalErrorLogin]);
}
