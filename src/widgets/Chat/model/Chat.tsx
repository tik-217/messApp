// feature
import InputMessage from "@/feature/InputMessage/model/InputMessage";
import MessagesList from "@/feature/MessagesList/model/MessagesList";
import ChatHeader from "@/feature/ChatHeader/model/ChatHeader";

// styles
import styles from "../ui/Chat.module.scss";

export default function Chat() {
  return (
    <div className={styles.chat}>
      <ChatHeader />
      <MessagesList />
      <InputMessage />
    </div>
  );
}
