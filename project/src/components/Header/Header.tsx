import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <header id="header" className="header">
      <nav className="container nav">
        <img src="./assets/logosaltur.svg" alt="Logo Saltur" />
        <ul className="navLinks">
          <li><NavLink className="linkHeader" to="/" end>Home</NavLink></li>
          <li><NavLink className="linkHeader" to="sobre-nos">Sobre Nós</NavLink></li>
          <li><NavLink className="linkHeader" to="noticias">Notícias</NavLink></li>
          <li><NavLink className="linkHeader" to="links-uteis">Links Úteis</NavLink></li>
          <li><NavLink className="linkHeader" to="ramais">Ramais</NavLink></li>
          <li><NavLink className="linkHeader" to="downloads">Downloads</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
