import React from 'react'
import { funcionarioData } from './Content'

export default function Funcionario(props: funcionarioData) {
  const { Nome, Setor, Cargo } = props
  return (
    <tr className="funcionarioItems">
      <td className="funcionarioItem funcNome">{Nome}</td>
      <td className="funcionarioItem funcSetor">{Setor}</td>
      <td className="ramalItem funcCargo">{Cargo}</td>
    </tr>
  )
}
