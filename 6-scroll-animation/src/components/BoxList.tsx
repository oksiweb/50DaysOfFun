import { useEffect, useRef, useState } from "react"
import Box from "./Box"

interface BoxListProps {
  numBoxes: number
}

function BoxList({ numBoxes }: BoxListProps) {
  const [boxStates, setBoxStates] = useState<boolean[]>(Array(numBoxes).fill(false))
  const boxRefs = useRef<(HTMLDivElement | null)[]>(Array(numBoxes).fill(null))

  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = (window.innerHeight / 5) * 4
      setBoxStates(prevBoxStates => {
        return prevBoxStates.map((boxState, index) => {
          const boxTop = boxRefs.current[index]?.getBoundingClientRect().top ?? 0
          if (boxTop < triggerBottom) {
            return true
          } else {
            return boxState
          }
        })
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {Array.from({ length: numBoxes }, (_, index) => (
        <Box key={index} index={index} isActive={boxStates[index]} boxRef={(el: HTMLDivElement | null) => (boxRefs.current[index] = el)} />
      ))}
    </>
  )
}

export default BoxList
