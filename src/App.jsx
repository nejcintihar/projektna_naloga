import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layouts/Layout"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./index.css"
import Tenzies from "./Components/Tenzies"


import About from "./Components/About"
import Games from "./Components/Games"
import Contact from "./Components/Contact"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="games">
            <Route index element={<Games />} />
            <Route path="tenzies" element={<Tenzies />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
