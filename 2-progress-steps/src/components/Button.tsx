import React from "react"

interface ButtonProps {
  id: string
  type?: "button" | "submit" | "reset"
  children: string
  disabled?: boolean
  onClick?: () => void
}

function Button({ children, type = "button", id, disabled = false, onClick }: ButtonProps) {
  return (
    <button type={type} id={id} className="btn" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
