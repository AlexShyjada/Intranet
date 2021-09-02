import React from 'react'
import { missaoList } from './content'

export default function ParagrathsMissao(props: missaoList) {
  const {paragrath} = props
  return (
    <li>{paragrath}</li>
  )
}
