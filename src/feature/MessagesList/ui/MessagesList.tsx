"use client";

import { MutableRefObject, useLayoutEffect, useRef } from "react";
import styles from "../ui/MessagesList.module.scss";

export default function MessagesList() {
  const scrollTo: MutableRefObject<null | HTMLDivElement> = useRef(null);

  function lastMessageScroll() {
    if (!scrollTo.current) return;

    scrollTo.current.scrollIntoView({
      behavior: "auto",
      block: "end",
    });
  }

  useLayoutEffect(() => {
    lastMessageScroll();
  }, []);

  return (
    <div className={styles.messagesList}>
      <div className={styles.messagesList__wrapper}>
        <div className={styles.messagesList__recipient}>
          <span className={styles.messagesList__recipeText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            deleniti nesciunt distinctio eaque molestiae placeat quisquam eum,
            illum exercitationem cumque sequi architecto repellat beatae
            excepturi, porro quaerat libero natus vel.
          </span>
        </div>
        <div className={styles.messagesList__sender}>
          <span className={styles.messagesList__senderText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            deleniti nesciunt distinctio eaque molestiae placeat quisquam eum,
            illum exercitationem cumque sequi architecto repellat beatae
            excepturi, porro quaerat libero natus vel.
          </span>
        </div>
        <div className={styles.messagesList__recipient}>
          <span className={styles.messagesList__recipeText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            deleniti nesciunt distinctio eaque molestiae placeat quisquam eum,
            illum exercitationem cumque sequi architecto repellat beatae
            excepturi, porro quaerat libero natus vel.
          </span>
        </div>
        <div className={styles.messagesList__sender}>
          <span className={styles.messagesList__senderText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            deleniti nesciunt distinctio eaque molestiae placeat quisquam eum,
            illum exercitationem cumque sequi architecto repellat beatae
            excepturi, porro quaerat libero natus vel.
          </span>
        </div>
        <div className={styles.messagesList__recipient}>
          <span className={styles.messagesList__recipeText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            deleniti nesciunt distinctio eaque molestiae placeat quisquam eum,
            illum exercitationem cumque sequi architecto repellat beatae
            excepturi, porro quaerat libero natus vel.
          </span>
        </div>
        <div className={styles.messagesList__sender}>
          <span className={styles.messagesList__senderText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            deleniti nesciunt distinctio eaque molestiae placeat quisquam eum,
            illum exercitationem cumque sequi architecto repellat beatae
            excepturi, porro quaerat libero natus vel.
          </span>
        </div>
        <div className={styles.messagesList__recipient}>
          <span className={styles.messagesList__recipeText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            deleniti nesciunt distinctio eaque molestiae placeat quisquam eum,
            illum exercitationem cumque sequi architecto repellat beatae
            excepturi, porro quaerat libero natus vel.
          </span>
        </div>
        <div className={styles.messagesList__sender}>
          <span className={styles.messagesList__senderText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            deleniti nesciunt distinctio eaque molestiae placeat quisquam eum,
            illum exercitationem cumque sequi architecto repellat beatae
            excepturi, porro quaerat libero natus vel.
          </span>
        </div>
        <div ref={scrollTo} className={styles.messagesList_scrollTo}></div>
      </div>
    </div>
  );
}
