// feature
import InputMessage from "@/feature/InputMessage/ui/InputMessage";
import MessagesList from "@/feature/MessagesList/ui/MessagesList";
import ChatHeader from "@/feature/ChatHeader/ui/ChatHeader";

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
