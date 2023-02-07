import styles from "./EmptyTasks.module.css";
import Clipboard from "../assets/Clipboard.png";

export function EmptyTasks() {
  return(
    <div className={styles.container}>
      <img src={Clipboard} alt="Imagem para task vazia" />
      <div className={styles.msgs}>
        <p className={styles.line1}>Você ainda não tem tarefas cadastradas</p>
        <p className={styles.line2}>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}