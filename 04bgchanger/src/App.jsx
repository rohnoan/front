import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {

  const [color,setColor]=useState('olive')

  //function changeColor(color){
  //  setColor(color)
  //}

  return (
    <div className='w-full h-screen duration-200' style={{background:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap max-w-2xl gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl justify-center '>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          onClick={()=>setColor('red')}>
            red
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          onClick={()=>setColor('blue')}>
            blue
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          onClick={()=>setColor('green')}>
            green
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
