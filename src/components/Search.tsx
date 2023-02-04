import styles from './Search.module.css'
export function Search() {
  return(
    <div className={styles.search}>
      <input className={styles.searchInput} type="text" placeholder="Adicionar uma nova tarefa" />
      <button className={styles.searchButton} type="submit">Criar</button>
    </div>
  );
}