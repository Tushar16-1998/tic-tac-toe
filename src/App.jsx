import './App.css'
import { Routes , Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Game from './components/Game'

function App() {

  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<Game />} />
    </Routes>
  )
}

export default App
