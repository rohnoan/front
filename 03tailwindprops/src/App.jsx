import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl '>
        Vite with Tailwind
      </h1>
      <Card username="rohan"
      job="software engineer"/>
      <Card username="jay"
      job="food vendor"/>
      <Card username="gurveer"
      job="tinga ling tinga ling"/>
      <Card/>
    </>
  )
}

export default App
