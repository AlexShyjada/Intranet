import React from 'react'
import ParagrathsMissao from './ParagrathsMissao'
import { content } from './content'

export default function MissaoList() {

  return (
    <section>
      <h2>Missão, Visão e Valores</h2>
      <p>A Empresa Salvador Turismo - SALTUR, antes denominada Empresa de Turismo S/A – EMTURSA, constituída nos termos da Lei n° 3.601 de 18.02.86 e com as alterações decorrentes das Leis 4.103 de 29.06.90, 5.245 de 06.02.97 e 7.610/2008 de 29.12.2008, sob a forma de sociedade de economia mista, é entidade da administração indireta da Prefeitura Municipal do Salvador, vinculada ao Gabinete do Prefeito.</p>
      <p>A SALTUR tem por finalidade fomentar, planejar, coordenar, executar e controlar as atividades turísticas, promovendo o Município do Salvador, com as seguintes áreas de competência:</p>

        {content.map ((item) => {
          <ParagrathsMissao
            key={item.key}
            id={item.id}
            paragrath={item.paragrath}
          />
        })}
    </section>
  )
}
