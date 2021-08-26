import React from 'react'
import { missaoList } from './content'

export default function ParagrathsMissao(props: missaoList) {
  const {id, key, paragrath} = props
  return (
    <ul>
      <li>{paragrath}</li>
    </ul>
  )
}
