import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header id="header" className="header">
      <nav className="container nav">
        <img src="./assets/logosaltur.svg" alt="Logo Saltur" />
        <ul className="navLinks">
          <li><a className="linkHeader" href="#">Página inicial</a></li>
          <li><a className="linkHeader" href="#">Quem Somos</a></li>
          <li><a className="linkHeader" href="#">Avisos</a></li>
          <li><a className="linkHeader" href="#">Links úteis</a></li>
          <li><a className="linkHeader" href="#">Ramais</a></li>
          <li><a className="linkHeader" href="#">Downloads</a></li>
        </ul>
      </nav>
    </header>
  )
}
