import React from 'react'
import {contentSegundoAndar} from './Content'
import {contentPrimeiroAndar} from './Content'
import {contentMezanino} from './Content'
import {contentTerreo} from './Content'
import Ramal from './Ramal'

export default function TableRamais() {
  return (
    <section>
      <h2>Ramais Saltur</h2>

      <table>
        <thead>
          <tr>
            <th>Setor</th>
            <th>Nome</th>
            <th>Ramal</th>
          </tr>
        </thead>

        <tbody>
          {contentSegundoAndar.map((item) =>{
            return (
              <Ramal
                key={item.key}
                id={item.id}
                Setor={item.Setor}
                Atendente={item.Atendente}
                Ramal={item.Ramal}
              />
            )
          })}
        </tbody>

      </table>
    </section>
  )
}
