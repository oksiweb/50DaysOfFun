import React, { useState } from "react"

import Navbar from "./components/Navbar"
import Header from "./components/Header"

function App() {
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <Navbar />
    </>
  )
}

export default App
