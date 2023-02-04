import { useState } from "react"
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Results } from "./components/Results";
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Search />
      <Results />
    </div>
  )
}

export default App
