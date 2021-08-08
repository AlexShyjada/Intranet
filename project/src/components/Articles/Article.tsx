import React from 'react'
import {articleData} from './Content'

export default function Article(props: articleData){

  const {img, title, paragrath, url} = props;

  return (
    <article className="noticia">
      <div className="imgArticle" style={{background: `url(${img}) no-repeat center`, backgroundSize: `cover`}}></div>
      <div className="contentArticle">
        <h3 className="articleTitle">{title}</h3>
        <p className="paragrathArticle">{paragrath}</p>
        <a className="articleLink" href={url}>Saiba mais</a>
      </div>
    </article>
  )
}