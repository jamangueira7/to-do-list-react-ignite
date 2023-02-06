import { Tasks } from "./Tasks";
import { TasksProps } from "../App";
import styles from "./Results.module.css";

export function Results(tasks: TasksProps[]) {

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
        {

          tasks
            ? tasks.map(task => {
              console.log("---->", task);
            return <Tasks key={task.id} task={task}/>
          })
            : "Test"
        }
      </div>
    </div>
  );
}