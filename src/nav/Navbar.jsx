import React from 'react'
import { Link } from 'react-router-dom'
import Style from './navbar.module.scss'

export function Navigation() {



  return (
    <nav>
      <img src="#" alt="logo" className={Style.logo}></img>
      <button></button>
      <ul className={Style.navul} id="nav-ul">
        <li className={Style.navlink}><Link to="/forside">1</Link></li>
        <li className={Style.link}><Link to="/2">2</Link></li>
        <li className={Style.link}><Link to="/3">3</Link></li>
        <li className={Style.link}><Link to="/4">4</Link></li>
      </ul>
    </nav>
  )
}
