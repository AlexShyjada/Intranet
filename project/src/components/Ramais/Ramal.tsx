import React from 'react'
import {ramalData} from './Content'

export default function Ramal(props: ramalData) {
  const {Setor, Atendente, Ramal} = props
  return (
    <tr className="ramal">
      <td className="ramalItem">{Setor}</td>
      <td className="ramalItem">{Atendente}</td>
      <td className="ramalItem">{Ramal}</td>
    </tr>
  )
}
