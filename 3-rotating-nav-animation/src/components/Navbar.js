import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faUserAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} />
          Home
        </li>
        <li>
          <FontAwesomeIcon icon={faUserAlt} />
          About
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          Contact
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
