import React from 'react'
import { Link } from 'react-router-dom';

export default function SobreNos() {
  return (
    <nav id="sobreNos">
      <Link to="missao" className="missao">Missão, visão e valores</Link> 
      <Link to="nossa-equipe" className="nossaEquipe">Nossa Equipe</Link>
      <Link to="regimento-interno" className="regimentoInterno">Regimento Interno</Link>
      <Link to="organograma" className="organograma">Organograma</Link>
      <Link to="codigo-de-conduta" className="codigoDeConduta">Código de conduta</Link>
    </nav>
  )
}
