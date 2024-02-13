import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

//Pages
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import SignUp from './Pages/signup/SignUp';
import Sidebar from './components/sidebar/Sidebar';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
