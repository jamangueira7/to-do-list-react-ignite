import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";
import { TasksProps } from "../App";
import {useState} from "react";


export function Tasks({ id, description, done } : TasksProps ) {
  const [checked, setChecked] = useState(done);

  function handleOnChangeDoneCheckbox() {
    setChecked(!checked);
  }

  return(
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleOnChangeDoneCheckbox}
        id={id.toString()}
        name="tasks"
        value={id}
      />
      <span className={styles.description}>{description}</span>
      <Trash
        size={24}
        color="#808080"
      />
    </div>
  );
}