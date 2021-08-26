import React from 'react'
import { ramalData } from './Content'

export default function Ramal(props: ramalData) {
  const { Setor, Atendente, Ramal } = props
  return (
    <tr className="ramalItems">
      <td className="ramalItem setor">{Setor}</td>
      <td className="ramalItem nome">{Atendente}</td>
      <td className="ramalItem ramal">{Ramal}</td>
    </tr>
  )
}
