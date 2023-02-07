import { useState, useEffect } from "react";
import { Tasks } from "./Tasks";
import { EmptyTasks } from "./EmptyTasks";
import { TasksProps } from "../App";
import styles from "./Results.module.css";

interface ResultsProps {
  tasks: TasksProps[]
}

export function Results({ tasks }: ResultsProps) {
  const [tasksNumber, setTasksNumber] = useState(tasks.length);
  const [tasksCompleteNumber, setTasksCompleteNumber] = useState(countTasks());


  useEffect(() => {
    setTasksNumber(tasks.length);
  }, [tasks]);

  function countTasks() {
    const tasksCompleteCount = tasks.filter(task => task.done);
    return tasksCompleteCount.length;
  }
  function handleChangeComplete(id: number) {
    tasks.map(task => (task.id === id) ? task.done = !task.done : task.done);
    setTasksCompleteNumber(countTasks());
  }

  function removeTask(id: number) {
    let foundIndex = tasks.findIndex(task => task.id === id)
    tasks.splice(foundIndex, 1);
    setTasksNumber(tasks.length);
  }

  return(
    <div className={styles.results}>
      <div className={styles.markers}>
        <div className={styles.taskNumber}>
          <span className={styles.taskNumberDescription}>Tarefas criadas</span>
          <span className={styles.taskNumberValue}>{tasksNumber}</span>
        </div>
        <div className={styles.taskDone}>
          <span className={styles.TaskDoneDescription}>Concluídas</span>
          <span className={styles.taskDoneValue}>
            {
              tasksNumber === 0
                ? tasksNumber
                : `${tasksCompleteNumber} de ${tasksNumber}`
            }
          </span>
        </div>
      </div>

      <div className={styles.tasks}>
          {
            tasks.length !== 0
              ? tasks.map(task => {
                  return (
                    <Tasks
                      key={task.id}
                      task = {task}
                      handleChangeComplete={handleChangeComplete}
                      removeTask={removeTask}
                    />
                  )
                })
              : <EmptyTasks />
          }
      </div>
    </div>
  );
}