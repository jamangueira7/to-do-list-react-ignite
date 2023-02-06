import { TasksProps } from "../App";
import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

export function Tasks({ id, description, done }: TasksProps) {

  return(
    <div className={styles.container}>
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <span className={styles.description}>{description}</span>
      <Trash size={24} color="#808080"/>
    </div>
  );
}