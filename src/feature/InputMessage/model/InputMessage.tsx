// entities
import BtnMainAction from "@/entities/BtnMainAction/model/BtnMainAction";

// styles
import styles from "../ui/InputMessage.module.scss";

export default function InputMessage() {
  return (
    <div className={styles.inputMessage}>
      <textarea
        placeholder="Введите сообщение"
        className={styles.inputMessage__input}
        spellCheck={true}
        rows={4}
      />
      <BtnMainAction btnText={"Отправить"} btnColor={"gradient"} />
    </div>
  );
}
