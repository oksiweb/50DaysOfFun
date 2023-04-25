import React, { useState } from "react"
import Button from "./components/Button"
import ProgressList from "./components/ProgressList"

function App() {
  const circles: number[] = [1, 2, 3, 4]
  const [currentActive, setCurrentActive] = useState(1)
  const [isPrevDisabled, setIsPrevDisabled] = useState(false)
  const [isNextDisabled, setIsNextDisabled] = useState(false)

  const handleClickPrev = () => {
    setCurrentActive(prev => {
      const newActive = prev - 1
      setIsPrevDisabled(newActive === 1)
      setIsNextDisabled(false)
      return newActive
    })
  }

  const handleClickNext = () => {
    setCurrentActive(prev => {
      const newActive = prev + 1
      setIsNextDisabled(newActive === circles.length)
      setIsPrevDisabled(false)
      return newActive
    })
  }

  return (
    <div className="container">
      <ProgressList circles={circles} currentActive={currentActive} />
      <Button id="prev" onClick={handleClickPrev} disabled={isPrevDisabled}>
        Prev
      </Button>
      <Button id="next" onClick={handleClickNext} disabled={isNextDisabled}>
        Next
      </Button>
    </div>
  )
}

export default App
