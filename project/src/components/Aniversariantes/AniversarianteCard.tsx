import React from 'react'
import {aniversarianteData} from './Content'

export default function Aniversariante(props: aniversarianteData) {
  const {name, sexo, date, sector} = props
  return (
    <div className="aniversariante">
      <figure className="aniversariante">
        <img src={`${sexo === 'm' ? `/assets/Aniversariantes/avatar-masculino.svg` : `/assets/Aniversariantes/avatar-feminino.svg`}`} alt="Avatar Aniversariante" />
      </figure>
      <article className="aniversarianteData">
        <h3 className="aniverTitle">{name}</h3>
        <p className="aniverParagrath">{date}</p>
        <p className="aniverTitle">{sector}</p>
      </article>
    </div>
  )
}
