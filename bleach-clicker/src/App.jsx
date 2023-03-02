import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Menu />
    </div>
  )
}

export default App
