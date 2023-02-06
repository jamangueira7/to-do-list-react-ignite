import styles from "./Tasks.module.css";
import { Trash } from "phosphor-react";
export function Tasks() {
  return(
    <div className={styles.container}>
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <span className={styles.description}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      <Trash size={24} color="#808080"/>
    </div>
  );
}