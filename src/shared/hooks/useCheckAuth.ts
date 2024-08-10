// store
import { setIsAuth } from "@/shared/store/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";

// firebase
import { getAuth, onAuthStateChanged } from "firebase/auth/web-extension";
import { useEffect } from "react";

export default function useCheckAuth({
  isSubmitting,
  isValid,
}: {
  isSubmitting: boolean;
  isValid: boolean;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSubmitting && isValid) {
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setIsAuth(true));
        } else {
          dispatch(setIsAuth(false));
        }
      });
    }
  }, [isSubmitting, isValid]);
}
