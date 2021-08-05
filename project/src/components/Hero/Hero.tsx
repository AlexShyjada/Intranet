import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section>
      <div className="imgHeroSection">
        <img className="imgHero" src="./assets/Hero/imgHero.jpg" alt="" />
      </div>
      <div className="articleHero">
        <article className="article container">
          <h1 className="titleHero">Recadastramento dos aniversariantes do mês de agosto</h1>
          <p className="paragrathHero">Atenção! Está fazendo aniversário esse mês? Então não se esqueça de fazer o recadastramento na plataforma da Secretaria Municipal de Gestão - SEMGE</p>
          <a className="btnHero" href="https://www.recadastramento.salvador.ba.gov.br/ativo/login">Saiba Mais</a>
        </article>
      </div>
    </section>
  )
}
