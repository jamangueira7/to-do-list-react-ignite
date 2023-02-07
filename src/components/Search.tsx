import { useState, ChangeEvent, FormEvent, InvalidEvent } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./Search.module.css";
interface SearchProps {
  searchResult: (searchValue: string) => void;
}
export function Search({ searchResult }: SearchProps) {
  const [searchValue, setSearchValue] = useState('');

  function handleSearchTasksClick(event: FormEvent) {
    event.preventDefault();
    searchResult(searchValue);
    setSearchValue('');
  }

  function handleSearchTasks(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setSearchValue(event.target.value);
  }

  return(
      <form onSubmit={handleSearchTasksClick} className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          name="searchValue"
          placeholder="Adicionar uma nova tarefa"
          onChange={handleSearchTasks}
        />
        <button
          className={styles.searchButton}
          type="submit"
          title="Buscar tasks"
        >
          Criar
          <PlusCircle size={24} />
        </button>
      </form>
  );
}