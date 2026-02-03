import React from 'react'
import './Sidebar.css'

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <svg className="logo-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="28" stroke="url(#logoGradient)" strokeWidth="3" fill="none" />
          <path d="M20 32 L32 20 L44 32 L32 44 Z" fill="url(#logoGradient)" opacity="0.3" />
          <circle cx="32" cy="32" r="6" fill="url(#logoGradient)" />
          <path d="M32 10 L32 22 M32 42 L32 54 M10 32 L22 32 M42 32 L54 32" 
                stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <h1 className="logo-text">Cryptography</h1>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3 className="nav-section-title">Practicals</h3>
          <button
            className={`nav-item ${activePage === 'practical-1' ? 'active' : ''}`}
            onClick={() => setActivePage('practical-1')}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#navGradient)" strokeWidth="2" strokeLinejoin="round" fill="none" />
              <path d="M2 17L12 22L22 17" stroke="url(#navGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="url(#navGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Practical-1</span>
            <span className="nav-subtitle">Caesar Cipher</span>
          </button>
        </div>
      </nav>

      <div className="sidebar-footer">
        <svg className="footer-decoration" viewBox="0 0 200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M0,50 Q50,20 100,50 T200,50 L200,100 L0,100 Z" fill="url(#footerGradient)" />
        </svg>
        <p className="footer-text">Data Security Lab</p>
      </div>
    </aside>
  )
}

export default Sidebar
