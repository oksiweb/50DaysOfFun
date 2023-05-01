interface BoxProps {
  index: number
  isActive: boolean
  boxRef: (el: HTMLDivElement | null) => void
}

function Box({ index, isActive, boxRef }: BoxProps) {
  return (
    <div className={`box ${isActive ? "show" : ""}`} id={`box-${index}`} ref={boxRef}>
      <h2>Content</h2>
    </div>
  )
}

export default Box
