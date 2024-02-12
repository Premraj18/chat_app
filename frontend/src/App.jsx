import { useState } from 'react'
import './App.css'
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

//Pages
import Home from './Pages/Home'
import Notes from './Pages/Mynotes/Notes'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
