import React, { useState } from 'react'
import './Playground.css'

const Playground = () => {
  const [inputText, setInputText] = useState('')
  const [key, setKey] = useState(3)
  const [outputText, setOutputText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [mode, setMode] = useState('encrypt')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setOutputText('')

    try {
      const apiUrl = import.meta.env.VITE_API_URL
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          key: mode === 'decrypt' ? -key : key,
        }),
      })

      if (!response.ok) {
        throw new Error('API request failed')
      }

      const data = await response.json()
      setOutputText(data.encrypted_text || data.result || data.text || data.output || '')
    } catch (err) {
      setError('Failed to process your request. Please try again.')
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText)
  }

  const handleClear = () => {
    setInputText('')
    setOutputText('')
    setError('')
    setKey(3)
  }

  return (
    <section className="playground">
      <div className="playground-header">
        <div className="playground-title-container">
          <svg className="playground-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="playgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <rect x="8" y="8" width="48" height="48" rx="8" stroke="url(#playgroundGradient)" strokeWidth="3" fill="none" />
            <path d="M20 32 L28 24 M28 40 L36 32 M36 24 L44 32" stroke="url(#playgroundGradient)" 
                  strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="32" r="2" fill="url(#playgroundGradient)" />
            <circle cx="44" cy="32" r="2" fill="url(#playgroundGradient)" />
          </svg>
          <h2 className="playground-title">Interactive Playground</h2>
        </div>
        <p className="playground-subtitle">Test the Caesar Cipher in real-time</p>
      </div>

      <form onSubmit={handleSubmit} className="playground-form">
        <div className="mode-switcher">
          <button
            type="button"
            className={`mode-btn ${mode === 'encrypt' ? 'active' : ''}`}
            onClick={() => setMode('encrypt')}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 11V7a4 4 0 118 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Encrypt
          </button>
          <button
            type="button"
            className={`mode-btn ${mode === 'decrypt' ? 'active' : ''}`}
            onClick={() => setMode('decrypt')}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 11V7a4 4 0 018 0M16 11h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Decrypt
          </button>
        </div>

        <div className="form-grid">
          <div className="input-group">
            <label htmlFor="input-text" className="input-label">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Input Text
            </label>
            <textarea
              id="input-text"
              className="input-field input-textarea"
              placeholder="Enter your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="key" className="input-label">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Shift Key: <span className="key-value">{key}</span>
            </label>
            <div className="range-container">
              <input
                type="range"
                id="key"
                className="range-input"
                min="1"
                max="25"
                value={key}
                onChange={(e) => setKey(parseInt(e.target.value))}
              />
              <div className="range-labels">
                <span>1</span>
                <span>25</span>
              </div>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="btn btn-primary" disabled={loading || !inputText}>
            {loading ? (
              <>
                <svg className="spinner" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
                  <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
                Processing...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" fill="currentColor" opacity="0.3" />
                </svg>
                {mode === 'encrypt' ? 'Encrypt' : 'Decrypt'}
              </>
            )}
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleClear}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Clear
          </button>
        </div>

        {error && (
          <div className="error-message">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {error}
          </div>
        )}

        {outputText && (
          <div className="output-container">
            <div className="output-header">
              <label className="output-label">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Output
              </label>
              <button type="button" className="copy-btn" onClick={handleCopy}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Copy
              </button>
            </div>
            <div className="output-field">{outputText}</div>
          </div>
        )}
      </form>

      <div className="decorative-elements">
        <svg className="deco-svg deco-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="decoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#decoGradient1)" />
        </svg>
        <svg className="deco-svg deco-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="decoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#decoGradient2)" />
        </svg>
      </div>
    </section>
  )
}

export default Playground
