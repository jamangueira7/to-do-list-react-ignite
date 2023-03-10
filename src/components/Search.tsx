import { useState, ChangeEvent, FormEvent, InvalidEvent } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./Search.module.css";

interface SearchProps {
  searchResult: (searchValue: string) => void;
  createTask: (searchValue: string) => void;
}

export function Search({ searchResult, createTask }: SearchProps) {
  const [searchValue, setSearchValue] = useState('');

  function handleSearchTasksClick(event: FormEvent) {
    event.preventDefault();
    createTask(event.target.searchValue.value);
    setSearchValue('');
  }

  function handleSearchTasks(event: ChangeEvent<HTMLTextAreaElement>) {
    searchResult(event.target.value);
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
          value={searchValue}
        />
        <button
          className={styles.searchButton}
          type="submit"
          title="Buscar tasks"
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
  );
}