import React from 'react'
import { Routes, Route } from "react-router-dom";
import Signup from './Auth/Signup.jsx'
import Signin from './Auth/Signin.jsx'
import ForgotPassword from './Auth/ForgotPassword.jsx'
import Dashboard from './pages/Dashboard.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}

export default App