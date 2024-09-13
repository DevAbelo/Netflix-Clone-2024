/* eslint-disable react/jsx-no-undef */
import { useState } from 'react'
import './App.css'
import "./index.css"
import Home from './Pages/Home/Home'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
      <Home/>
      </div>
    </>
  )
}

export default App
