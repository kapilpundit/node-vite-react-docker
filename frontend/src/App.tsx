import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  console.log("App Loaded123... ", new Date().toISOString());

  return (
    <>
      <h1>React Frontend</h1>
    </>
  )
}

export default App
