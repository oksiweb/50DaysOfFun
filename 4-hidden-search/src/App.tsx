import { useEffect, useState, useRef } from "react"
import { FiSearch } from "react-icons/fi"

function App() {
  const [active, setActive] = useState(false)
  const input = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    setActive(!active)
  }
  useEffect(() => {
    if (active) {
      input?.current?.focus()
    }
  }, [active])
  return (
    <>
      <div className={`search ${active && "active"}`}>
        <input ref={input} className="search-input" type="text" placeholder="Search ..." />
        <button className="btn" onClick={handleClick}>
          <FiSearch />
        </button>
      </div>
    </>
  )
}

export default App
