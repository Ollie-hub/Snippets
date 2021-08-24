import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import "./navbar.module.scss"

export function Navigation() {

  const [Open, setOpen] = useState("show");
  const ToggleClass = () => {
    setOpen(!Open);
  };

  return (
    <nav>
      <img src="#" alt="logo" className="logo"></img>
      <button className="hamburger" id="hamburger" onClick={ToggleClass}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className={Open ? "show" : null} >
        <li className="navlink"><Link to="/forside">1</Link></li>
        <li className="link"><Link to="/2">2</Link></li>
        <li className="link"><Link to="/3">3</Link></li>
        <li className="link"><Link to="/4">4</Link></li>
      </ul>
    </nav>
  )
}
