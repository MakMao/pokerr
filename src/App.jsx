import { useState } from 'react'
import { useAppContext } from './context/AppContext'
import HuOptions from './components/HuOptions'
import Start from './components/Start'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HuPostFlop from './components/HuPostFlop';
import U50 from './components/U50'
import U100 from './components/U100'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/hu" element={<HuOptions/>}/>
        <Route path="/50u" element={<U50/>}/>
        <Route path="/100u" element={<U100/>}/>
        <Route path="/hu/test" element={<HuPostFlop/>}/>
      </Routes>
    </Router>
  )
}

export default App
