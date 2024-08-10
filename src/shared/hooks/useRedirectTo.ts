// next / react
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// store
import { useAppSelector } from "@/shared/store/hooks";

export default function useRedirectTo() {
  const router = useRouter();

  const isAuth = useAppSelector((state) => state.authState.isAuth);

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [isAuth]);
}
