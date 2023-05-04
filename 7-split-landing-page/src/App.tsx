import { useState } from "react"

function App() {
  const [hover, setHover] = useState({
    left: false,
    right: false
  })

  function handleMouseEnter(side: string) {
    setHover(prevState => ({
      ...prevState,
      [side]: true
    }))
  }

  function handleMouseLeave(side: string) {
    setHover(prevState => ({
      ...prevState,
      [side]: false
    }))
  }

  return (
    <div className={`container ${hover.right ? "hover-right" : ""} ${hover.left ? "hover-left" : ""}`}>
      <div onMouseEnter={() => handleMouseEnter("left")} onMouseLeave={() => handleMouseLeave("left")} className="split left">
        <h1>Playstation 5</h1>
        <button className="btn">Buy Now</button>
      </div>
      <div onMouseEnter={() => handleMouseEnter("right")} onMouseLeave={() => handleMouseLeave("right")} className="split right">
        <h1>XBox Series X</h1>
        <button className="btn">Buy Now</button>
      </div>
    </div>
  )
}

export default App
