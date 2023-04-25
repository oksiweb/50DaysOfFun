import React from "react"
import Circle from "./Circle"

interface ProgressListProps {
  circles: number[]
  currentActive: number
}

function ProgressList({ circles, currentActive }: ProgressListProps) {
  const width = `${((currentActive - 1) / (circles.length - 1)) * 100}%`
  return (
    <div className="progress-container">
      <div style={{ width: width }} className="progress" id="progress"></div>
      {circles.map((value: number) => {
        return <Circle key={value} value={value} active={value <= currentActive} />
      })}
    </div>
  )
}

export default ProgressList
