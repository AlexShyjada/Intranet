import React from 'react'
import './gridAniversariantes.css'
import Aniversariante from './AniversarianteCard'
import {content} from './Content'

export default function GridAniversariantes() {
  return (
    <section id="Aniversariantes" className=" aniversariantes container">
      <h2 className="titleAniversarante">Aniversariantes do mês</h2>
      <div className="gridAniversariantes">
        {content.map((item) => {
          return (
            <Aniversariante
              key={item.id}
              id={item.id}
              name={item.name}
              sexo={item.sexo}
              date={item.date}
              sector={item.sector}
            />
          )
        })}
      </div>
    </section>
  )
}
