import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'
import Fetch from './Fetch'
import TextToSpeech from './TextToSpeech'
import Portal from './Portal'


function App() {
  const [count, setCount] = useState(0)

  return (
    // <Navbar/>
    // <Fetch/>
    <TextToSpeech/>
    // <Portal/>
  )
}

export default App
