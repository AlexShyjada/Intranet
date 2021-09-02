import React from 'react'
import { contentSegundoAndar } from './Content'
import { contentPrimeiroAndar } from './Content'
import { contentMezanino } from './Content'
import { contentTerreo } from './Content'
import Ramal from './Ramal'
import './TableRamais.css'

export default function TableRamais() {
  return (
    <section>
      <h2 className="titleRamais">Ramais Saltur</h2>
      <div className="andar">
        <h3 className="titleAndar">Segundo Andar</h3>
        <table className="container ramalList">
          <thead id="cabecalho">
            <tr className="cabecalhoItems">
              <th className="cabecalhoItem setor">Setor</th>
              <th className="cabecalhoItem nome">Nome</th>
              <th className="cabecalhoItem ramal">Ramal</th>
            </tr>
          </thead>
          <tbody>
            {contentSegundoAndar.map((item) => {
              return (
                <Ramal
                  key={item.id}
                  id={item.id}
                  Setor={item.Setor}
                  Atendente={item.Atendente}
                  Ramal={item.Ramal}
                />
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="andar">
        <h3 className="titleAndar">Primeiro Andar</h3>
        <table className="container ramalList">
          <thead id="cabecalho">
            <tr className="cabecalhoItems">
              <th className="cabecalhoItem setor">Setor</th>
              <th className="cabecalhoItem nome">Nome</th>
              <th className="cabecalhoItem ramal">Ramal</th>
            </tr>
          </thead>
          <tbody>
            {contentPrimeiroAndar.map((item) => {
              return (
                <Ramal
                  key={item.id}
                  id={item.id}
                  Setor={item.Setor}
                  Atendente={item.Atendente}
                  Ramal={item.Ramal}
                />
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="andar">
        <h3 className="titleAndar">Mezanino</h3>
        <table className="container ramalList">
          <thead id="cabecalho">
            <tr className="cabecalhoItems">
              <th className="cabecalhoItem setor">Setor</th>
              <th className="cabecalhoItem nome">Nome</th>
              <th className="cabecalhoItem ramal">Ramal</th>
            </tr>
          </thead>
          <tbody>
            {contentMezanino.map((item) => {
              return (
                <Ramal
                  key={item.id}
                  id={item.id}
                  Setor={item.Setor}
                  Atendente={item.Atendente}
                  Ramal={item.Ramal}
                />
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="andar">
        <h3 className="titleAndar">Térreo</h3>
        <table className="container ramalList">
          <thead id="cabecalho">
            <tr className="cabecalhoItems">
              <th className="cabecalhoItem setor">Setor</th>
              <th className="cabecalhoItem nome">Nome</th>
              <th className="cabecalhoItem ramal">Ramal</th>
            </tr>
          </thead>
          <tbody>
            {contentTerreo.map((item) => {
              return (
                <Ramal
                  id={item.id}
                  Setor={item.Setor}
                  Atendente={item.Atendente}
                  Ramal={item.Ramal}
                />
              )
            })}
          </tbody>
        </table>
      </div>

    </section>
  )
}
