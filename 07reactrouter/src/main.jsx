import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import Github from './components/Github/Github.jsx'
import Contact from './components/Contact/Contact.jsx'
import App from './App.jsx'
import User from './components/User/User.jsx'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
// to put route inside route example smtg.com/about/company then 
//<Route path='about'>
//<Route path='company'/>
//</Route>

//user/:userid
//for multiple user ids.

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>} /> 
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/' element={<User/>}>
        <Route path=':userid' element={<User/>}/>
      </Route>
      <Route path='github' element={<Github/>}/>
      <Route path='*' element={<div>Not found</div>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
