import React from 'react'
import { Link } from 'react-router-dom'
import Style from './navigation.module.scss'

export function Navigation() {
  return (

    <nav className={Style.navBar}>
      <ul>
        <li className={Style.link}><Link to="/forside">1</Link></li>
        <li className={Style.link}><Link to="/2">2</Link></li>
        <li className={Style.link}><Link to="/3">3</Link></li>
        <li className={Style.link}><Link to="/4">4</Link></li>
      </ul>
    </nav>
  )
}
