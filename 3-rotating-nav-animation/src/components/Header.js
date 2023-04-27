import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"
import Content from "./Content"

function Header({ showNav, setShowNav }) {
  return (
    <div className={`container ${showNav ? "show-nav" : ""}`}>
      <div className="circle-container">
        <div className="circle">
          <button id="close" onClick={() => setShowNav(!showNav)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <button id="open">
            <FontAwesomeIcon icon={faBars} onClick={() => setShowNav(!showNav)} />
          </button>
        </div>
      </div>
      <Content />
    </div>
  )
}

export default Header
