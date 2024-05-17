import { useState } from "react"
import RobotsList from './componets/RobotsList'
import SearchBar  from './componets/SearchBar'
import './App.css'
import searchRobots from './api'

function App() {
  const [robots, setRobots] = useState([])
  const handleSubmit = async(term) => {
    console.log('buscando con:', term)
    const result = await searchRobots(term)

    setRobots(result)
  }

  return (
    <>
      <h1>My Robots</h1>
      <SearchBar onSubmit={handleSubmit} />
      <RobotsList robots={robots} />
    </>
  )
}

export default App