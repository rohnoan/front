import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContexterProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>React video for context api</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
