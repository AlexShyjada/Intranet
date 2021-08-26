import React from 'react'
import { contentPresidencia } from './Content'
import { contentDirAdmFin } from './Content'
import { contentDirEventos } from './Content'
import Funcionario from './Funcionario'
import './TableEquipe.css'

export default function TableRamais() {
  return (
    <section>
      <h2 className="titleEquipe">Equipe da Saltur</h2>
      <div className="andar">
        <h3 className="titleSetor">Presidência</h3>
        <table className="container fincionariosList">
          <thead id="cabecalho">
            <tr className="funcCabecalhoItems">
              <th className="funcCabecalhoItem funcNome">Nome</th>
              <th className="funcCabecalhoItem funcSetor">Setor</th>
              <th className="funcCabecalhoItem funcCargo">Cargo</th>
            </tr>
          </thead>
          <tbody>
            {contentPresidencia.map((item) => {
              return (
                <Funcionario
                  key={item.key}
                  id={item.id}
                  Nome={item.Nome}
                  Setor={item.Setor}
                  Cargo={item.Cargo}
                />
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="andar">
        <h3 className="titleSetor">Diretoria Administrativa Financeira</h3>
        <table className="container fincionariosList">
          <thead id="cabecalho">
            <tr className="funcCabecalhoItems">
              <th className="funcCabecalhoItem funcNome">Nome</th>
              <th className="funcCabecalhoItem funcSetor">Setor</th>
              <th className="funcCabecalhoItem funcCargo">Cargo</th>
            </tr>
          </thead>
          <tbody>
            {contentDirAdmFin.map((item) => {
              return (
                <Funcionario
                  key={item.key}
                  id={item.id}
                  Nome={item.Nome}
                  Setor={item.Setor}
                  Cargo={item.Cargo}
                />
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="andar">
        <h3 className="titleSetor">Diretoria de Eventos</h3>
        <table className="container fincionariosList">
          <thead id="cabecalho">
            <tr className="funcCabecalhoItems">
              <th className="funcCabecalhoItem funcNome">Nome</th>
              <th className="funcCabecalhoItem funcSetor">Setor</th>
              <th className="funcCabecalhoItem funcCargo">Cargo</th>
            </tr>
          </thead>
          <tbody>
            {contentDirEventos.map((item) => {
              return (
                <Funcionario
                  key={item.key}
                  id={item.id}
                  Nome={item.Nome}
                  Setor={item.Setor}
                  Cargo={item.Cargo}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
