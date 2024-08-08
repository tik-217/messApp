// react
import { useState } from "react";

// firebase
import firebaseApp from "@/root/initFirebase";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth/cordova";

// store
import { useAppDispatch } from "@/shared/store/hooks";
import { setIsLoading } from "@/shared/store/formSlice/formSlice";
import { setUserEmail } from "@/shared/store/userSlice/userSlice";

interface IUseSignIn {
  isSubmitting: boolean;
  emailOrPhoneValue: string;
  passwordValue: string;
}

export default function useSignIn({
  isSubmitting,
  emailOrPhoneValue,
  passwordValue,
}: IUseSignIn) {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useAppDispatch();

  if (isSubmitting) {
    const auth = getAuth(firebaseApp);

    dispatch(setIsLoading(true));

    signInWithEmailAndPassword(auth, emailOrPhoneValue, passwordValue)
      .then((userCredential) => {
        const userEmail = userCredential.user.email;

        userEmail && dispatch(setUserEmail(userEmail));
        setIsAuth(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        setIsAuth(false);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }

  return isAuth;
}
