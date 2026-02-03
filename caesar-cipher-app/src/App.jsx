import { useState } from 'react'
import Sidebar from './components/Sidebar'
import CaesarCipher from './components/CaesarCipher'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('practical-1')

  return (
    <div className="app-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {activePage === 'practical-1' && <CaesarCipher />}
      </main>
    </div>
  )
}

export default App
