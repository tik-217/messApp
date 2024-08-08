"use client";

import Image from "next/image";

// store
import { setIsOpen } from "@/shared/store/menuSlice/menuSlice";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";

// entities
import IsOnline from "@/entities/IsOnline/ui/IsOnline";

// shared
import { altImage } from "@/shared/services/altImages";

// images
import menu from "@/shared/images/menu.svg";

// styles
import styles from "../ui/ChatHeader.module.scss";

export default function ChatHeader() {
  const userEmail = useAppSelector((state) => state.userState.user.email);
  const dispatch = useAppDispatch();

  return (
    <header className={styles.chatHeader}>
      <div className={styles.chatHeader__menuImages}>
        <Image
          width={40}
          height={40}
          src={menu}
          alt={altImage(menu.src)}
          className={styles.chatHeader__menuToOpen}
          onMouseEnter={() => dispatch(setIsOpen(true))}
        />
      </div>
      <span className={styles.chatHeader__recipient}>{userEmail}</span>
      <div className={styles.chatHeader__online}>
        <IsOnline />
      </div>
    </header>
  );
}
