import React, { useState } from "react"

import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Header from "./components/Header"

function App() {
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <Header showNav={showNav} setShowNav={setShowNav} />
      <Content />
      <Navbar />
    </>
  )
}

export default App
