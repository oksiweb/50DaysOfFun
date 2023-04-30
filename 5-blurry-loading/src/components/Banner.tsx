import React, { useEffect, useState } from "react"
import { scale } from "../utils/helper"

function Banner() {
  const [load, setLoad] = useState<number>(0)
  const [filter, setFilter] = useState("0px")
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    function loadBlur() {
      const interval = setInterval(() => {
        setLoad(prev => {
          let newLoad = prev + 1
          if (newLoad > 99) {
            clearInterval(interval)
          }
          return newLoad
        })
      }, 50)
    }
    loadBlur()
  }, [])

  useEffect(() => {
    setOpacity(scale(load, 0, 100, 1, 0))
    setFilter(`blur(${scale(load, 0, 100, 30, 0)}px)`)
  }, [load])

  return (
    <>
      <section style={{ filter: filter }} className="bg"></section>
      <div className="loading-text" style={{ opacity: opacity }}>
        {load}%
      </div>
    </>
  )
}

export default Banner
