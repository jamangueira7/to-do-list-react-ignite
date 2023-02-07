import { useState } from "react";
import { Trash, Check } from "phosphor-react";
import styles from "./Tasks.module.css";
import { TasksProps } from "../App";


export function Tasks({ id, description, done } : TasksProps ) {
  const [checked, setChecked] = useState(done);

  function handleOnChangeDoneCheckbox() {
    setChecked(!checked);
  }

  return(
    <div className={styles.container}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleOnChangeDoneCheckbox}
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
      />
    </div>
  );
}