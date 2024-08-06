// widgets
import Sidebar from "@/widgets/Sidebar/model/Sidebar";
import Chat from "@/widgets/Chat/model/Chat";

// styles
import styles from "../ui/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.messApp}>
      <div className={styles.messApp__wrapper}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
