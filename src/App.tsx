// App.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBook, FaUser, FaBars } from 'react-icons/fa'

import './App.css'

function App({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app-container">
      <header className="app-header">
        <Link to="/" className="header-logo">
          <FaBook size={24} />
        </Link>
        <h1 className="header-title">Jupyter Time Machine</h1>
        <div className="header-controls">
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars size={20} />
          </button>
          <button className="user-button">
            <FaUser size={20} />
          </button>
        </div>
      </header>
      <main className="app-content">
        {children}
      </main>
    </div>
  )
}

export default App
