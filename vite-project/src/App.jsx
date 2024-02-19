import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './cards'
import Header from './header'

function App() {
  const [bestScore, setBestScore] = useState(0)
  const [score, setScore] = useState(0)

  return (
    <>
    <Header score={score}></Header>
      <Cards setScore={setScore}></Cards>
    </>
  )
}

export default App
