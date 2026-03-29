import React, { useState } from 'react'
import LoginComponentNew from './LoginComponentNew'
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

  return <LoginComponentNew onLoginSuccess={handleLoginSuccess} />
}

export default App