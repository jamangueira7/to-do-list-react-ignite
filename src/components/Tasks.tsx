import { useState } from "react";
import { Trash, Check } from "phosphor-react";
import styles from "./Tasks.module.css";
import { TasksProps } from "../App";

interface TaskProps {
  task: TasksProps;
  handleChangeComplete: (id: number) => void;
  removeTask: (id: number) => void;
}

export function Tasks({ task, handleChangeComplete, removeTask } : TaskProps ) {
  const { id, description, done } = task
  const [checked, setChecked] = useState(done);

  function handleOnChangeDoneCheckbox(id: number) {
    setChecked(!checked);
    handleChangeComplete(id);
  }

  function handleRemoveTask(id: number) {
    removeTask(id);
  }

  return(
    <div className={styles.container}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleOnChangeDoneCheckbox(id)}
          id={id.toString()}
          name="tasks"
          value={id}
        />
        <span className={styles.checked}>
          {
            checked ? <Check
                      size={14}
                      color="#F2F2F2"
                    /> : ""
          }
        </span>
      </label>
      <span className={styles.description}>{description}</span>
      <Trash
        size={24}
        color="#808080"
        onClick={() => handleRemoveTask(id)}
      />
    </div>
  );
}