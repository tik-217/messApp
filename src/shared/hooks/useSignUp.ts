// react
import { useState } from "react";

// firebase
import app from "@/root/initFirebase";
import { getAuth } from "firebase/auth/web-extension";
import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";

//
import checkRegister from "@/shared/services/checkRegister";

// store
import { setIsLoading } from "@/shared/store/formSlice/formSlice";
import { useAppDispatch } from "@/shared/store/hooks";
import { setUserAlreadyExist } from "@/shared/store/authSlice/authSlice";

export default function useSignUp({
  isSubmitting,
  isValid,
  email,
  password,
}: {
  isSubmitting: boolean;
  isValid: boolean;
  email: string;
  password: string;
}) {
  const [authOk, setAuthOk] = useState(false);
  const dispatch = useAppDispatch();

  dispatch(setIsLoading(true));

  if (isSubmitting && isValid) {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setAuthOk(true);
      })
      .catch((error) => {
        const errorCode: string = error.code;

        const isAlreadyRegistred = checkRegister({ errorCode });

        setUserAlreadyExist(isAlreadyRegistred);
        setAuthOk(false);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }

  return authOk;
}
