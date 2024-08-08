import Image from "next/image";

import circle from "@/shared/images/circle.svg";

// styles
import styles from "../ui/MiniChat.module.scss";

export default function MiniChat() {
  return (
    <div className={styles.miniChat}>
      <div className={styles.miniChat__imageWrap}>
        <Image src={circle} alt="" className={styles.miniChat__image} />
      </div>
      <section className={styles.miniChat__rescipient}>
        <h5 className={styles.miniChat__name}>Анна Корененина</h5>
        <p className={styles.miniChat__lastMess}>
          Lorem ipsum dolor dsddadasdasd
        </p>
      </section>
    </div>
  );
}
