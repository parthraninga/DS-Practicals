import React, { useState } from 'react'
import Playground from './Playground'
import './CaesarCipher.css'

const CaesarCipher = () => {
  return (
    <div className="caesar-cipher">
      <header className="page-header">
        <div className="header-content">
          <div className="header-icon">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="24" stroke="url(#headerGradient)" strokeWidth="2" fill="none" opacity="0.3" />
              <circle cx="32" cy="32" r="18" stroke="url(#headerGradient)" strokeWidth="2" fill="none" />
              <text x="32" y="38" fontSize="20" fill="url(#headerGradient)" textAnchor="middle" fontWeight="bold">A</text>
              <path d="M 32 8 L 35 14 M 32 56 L 35 50 M 8 32 L 14 35 M 56 32 L 50 35" 
                    stroke="url(#headerGradient)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h1 className="page-title">Caesar Cipher</h1>
            <p className="page-subtitle">Classical Substitution Cipher</p>
          </div>
        </div>
      </header>

      <div className="content-grid">
        <section className="info-card">
          <div className="card-header">
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cardGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#cardGradient1)" strokeWidth="2" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="url(#cardGradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="url(#cardGradient1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2>What is Caesar Cipher?</h2>
          </div>
          <div className="card-content">
            <p>
              The <strong>Caesar Cipher</strong> is one of the oldest and simplest encryption techniques. 
              Named after Julius Caesar, who used it to communicate with his generals, this cipher works 
              by shifting each letter in the plaintext by a fixed number of positions in the alphabet.
            </p>
            <div className="info-highlight">
              <svg className="highlight-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#6366f1" strokeWidth="2" />
                <path d="M12 8v4M12 16h.01" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p>
                <strong>Example:</strong> With a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so on.
              </p>
            </div>
          </div>
        </section>

        <section className="info-card">
          <div className="card-header">
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cardGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#cardGradient2)" strokeWidth="2" />
              <path d="M3 9h18M9 21V9" stroke="url(#cardGradient2)" strokeWidth="2" />
            </svg>
            <h2>How It Works</h2>
          </div>
          <div className="card-content">
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Choose a Key</h3>
                  <p>Select a shift value (key) between 1-25</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Shift Letters</h3>
                  <p>Each letter is shifted by the key value in the alphabet</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Wrap Around</h3>
                  <p>If shifting goes past 'Z', it wraps back to 'A'</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-card">
          <div className="card-header">
            <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cardGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" 
                    stroke="url(#cardGradient3)" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 11V7a4 4 0 118 0v4" stroke="url(#cardGradient3)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h2>Security Note</h2>
          </div>
          <div className="card-content">
            <p>
              While historically significant, the Caesar Cipher is <strong>not secure</strong> for modern use. 
              With only 25 possible keys, it can be easily broken through brute force or frequency analysis.
            </p>
            <div className="security-badges">
              <span className="badge badge-warning">Educational Purpose</span>
              <span className="badge badge-info">Historical Cipher</span>
            </div>
          </div>
        </section>
      </div>

      <Playground />
    </div>
  )
}

export default CaesarCipher
