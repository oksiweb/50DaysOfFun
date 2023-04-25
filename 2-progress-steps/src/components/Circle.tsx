import React from "react"

export interface CircleProps {
  value: number
  active?: boolean
}

function Circle({ value, active }: CircleProps) {
  return <div className={`circle ${active && "active"}`}>{value}</div>
}

export default Circle
