import { useState } from 'react'
import './App.css'
import { Counter_button } from './components/counter_button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter_button count={count} setCount={setCount}></Counter_button>
    </>
  )
}

export default App
