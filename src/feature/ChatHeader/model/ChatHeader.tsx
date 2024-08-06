"use client";

import Image from "next/image";

// entities
import IsOnline from "@/entities/IsOnline/model/IsOnline";

// images
import menu from "@/shared/images/menu.svg";

// styles
import styles from "../ui/ChatHeader.module.scss";
import { altImage } from "@/shared/services/altImages";
import { useAppDispatch } from "@/shared/store/hooks";
import { setIsOpen } from "@/shared/store/menuSlice/menuSlice";

export default function ChatHeader() {
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
      <span className={styles.chatHeader__recipient}>Анна Фоменко</span>
      <div className={styles.chatHeader__online}>
        <IsOnline />
      </div>
    </header>
  );
}
