"use client";

// next
import Image from "next/image";

// firebase
import app from "@/root/initFirebase";
import { getAuth, signOut } from "firebase/auth/web-extension";

// feature
import MiniChat from "@/feature/MiniChat/ui/MiniChat";

// entities
import BtnMainAction from "@/entities/BtnMainAction/ui/BtnMainAction";

// shared
import useRedirectTo from "@/shared/hooks/useRedirectTo";

// clsx
import clsx from "clsx";

// store
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { setIsOpen } from "@/shared/store/menuSlice/menuSlice";
import { setIsAuth } from "@/shared/store/authSlice/authSlice";

// services
import { altImage } from "@/shared/services/altImages";

// styles
import styles from "../ui/Sidebar.module.scss";

// image
import arrow from "@/shared/images/arrow.svg";

export default function Sidebar() {
  const isOpen = useAppSelector((state) => state.menuState.isOpen);
  const dispatch = useAppDispatch();

  const auth = getAuth(app);

  useRedirectTo();

  function signOutHandler() {
    dispatch(setIsAuth(false));
    signOut(auth);
  }

  return (
    <div className={clsx(styles.sidebar, isOpen && styles.sidebar_isOpen)}>
      <div className={styles.sidebar__header}>
        <h4 className={styles.sidebar__title}>Все сообщения</h4>
        <Image
          width={40}
          height={40}
          src={arrow}
          alt={altImage(arrow.src)}
          className={styles.sidebar__menuToClose}
          onMouseEnter={() => dispatch(setIsOpen(false))}
        />
      </div>
      <div className={styles.sidebar__chats}>
        <MiniChat />
        <MiniChat />
        <MiniChat />
        <MiniChat />
        <MiniChat />
        <MiniChat />
        <MiniChat />
        <MiniChat />
        <MiniChat />
      </div>
      <div className={styles.sidebar__logOut} onClick={() => signOutHandler()}>
        <BtnMainAction btnText={"Выйти из акаунта"} btnColor={"red"} />
      </div>
    </div>
  );
}
