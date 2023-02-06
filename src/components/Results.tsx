import { Tasks } from "./Tasks";
import styles from "./Results.module.css";

export function Results() {
  return(
    <div className={styles.results}>
      <div className={styles.markers}>
        <div className={styles.taskNumber}>
          <span className={styles.taskNumberDescription}>Tarefas criadas</span>
          <span className={styles.taskNumberValue}>0</span>
        </div>
        <div className={styles.taskDone}>
          <span className={styles.TaskDoneDescription}>Concluídas</span>
          <span className={styles.taskDoneValue}>0</span>
        </div>
      </div>

      <div className={styles.tasks}>
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
        <Tasks />
      </div>
    </div>
  );
}