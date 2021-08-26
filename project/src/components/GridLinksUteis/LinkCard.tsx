import React from 'react'
import {linksData} from './Content'

export default function LinkCard(props: linksData) {
  const {name, paragrath, url, img} = props;
  return (
    <article className="cardLink">
      <div className="imgLink" style={{background: `url(${img}) no-repeat center`, backgroundSize: `cover`}}></div>
      <div className="contentLink">
        <h3 className="titleLink">{name}</h3>
        <p className="paragrathLink">{paragrath}</p>
        <a className="btnLink" href={url} target="_blank">Ir para o link</a>
      </div>
    </article>
  )
}
