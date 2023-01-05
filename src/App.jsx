import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './navbar/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-3xl font-bold underline">
      <Nav/>
    </h1>
  )
}

export default App