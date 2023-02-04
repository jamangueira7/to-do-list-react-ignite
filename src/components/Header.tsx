import styles from "./Header.module.css";
import logo from "../assets/Logo.png";
export function Header() {
  return(
    <div className={styles.container}>
      <img src={logo} alt="Logo"/>
    </div>
  );
}