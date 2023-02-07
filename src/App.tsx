import { useState } from "react"
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Results } from "./components/Results";
import "./App.css"

export interface TasksProps {
  id: number;
  description: string;
  done: boolean;
}

let tasks = [
  {
    id: 1,
    description: "Test 1 - Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    done: true
  },
  {
    id: 2,
    description: "test 2",
    done: false
  },
  {
    id: 3,
    description: "test 3",
    done: false
  },
  {
    id: 4,
    description: "test 4",
    done: true
  },
];

function App() {
  const [result, setResult] = useState<TasksProps[]>(tasks)

  function searchResult(searchValue: string) {
    const searchTask = tasks.filter(task => task.description.toLowerCase().includes(searchValue));
    setResult(searchTask);
  }

  return (
    <div className="App">
      <Header />
      <Search searchResult={searchResult}/>
      <Results tasks={result}/>
    </div>
  )
}

export default App
