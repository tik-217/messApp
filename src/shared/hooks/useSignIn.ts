// react
import { useState } from "react";

// firebase
import app from "@/root/initFirebase";
import {
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth/web-extension";

// services
import checkTwoStrings from "@/shared/services/checkTwoStrings";

// store
import { useAppDispatch } from "@/shared/store/hooks";
import { setIsLoading } from "@/shared/store/formSlice/formSlice";
import { setUserEmail } from "@/shared/store/userSlice/userSlice";
import { setLoginInvalidCred } from "@/shared/store/authSlice/authSlice";

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
  const [authOk, setAuthOk] = useState(false);
  const dispatch = useAppDispatch();

  dispatch(setIsLoading(true));

  if (isSubmitting && isValid) {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, emailOrPhoneValue, passwordValue)
      .then((userCredential) => {
        const userEmail = userCredential.user.email;

        userEmail && dispatch(setUserEmail(userEmail));
        setAuthOk(true);
      })
      .catch((error) => {
        const errorCode = error.code;

        const invalidCredential = "invalid-credential";

        const isInvalidCredential = checkTwoStrings({
          errorCode,
          errorType: invalidCredential,
        });

        dispatch(setLoginInvalidCred(isInvalidCredential));
        setAuthOk(false);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }

  return authOk;
}
