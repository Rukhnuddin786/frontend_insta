import React, { useState } from 'react'
import LoginComponent from './LoginComponent'
import JobCareerPage from './JobCareerPage'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
  }

  if (isLoggedIn) {
    return <JobCareerPage />
  }

  return <LoginComponent onLoginSuccess={handleLoginSuccess} />
}

export default App