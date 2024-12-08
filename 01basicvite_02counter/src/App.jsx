import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15
  //const [variable,function/method]
  const [counter,setCounter]=useState(15)

  const removeValue=()=>{
    setCounter(counter-1)
  }
  const addValue=()=>{
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
    setCounter(counter=>counter+1)
  }

  
  return (
    <>
      <h1>react course with hitesh {counter}</h1>
      <h2>counter value{counter}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
