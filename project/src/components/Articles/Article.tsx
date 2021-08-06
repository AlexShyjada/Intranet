import React from 'react'
import {articleData} from './Content'

export default function Article(props: articleData){

  const {img, title, paragrath, url} = props;

  return (
    <article className="noticia">
      <img className="imgArticle" src={img} alt={title} />
      <div className="contentArticle">
        <h3 className="articleTitle">{title}</h3>
        <p className="paragrathArticle">{paragrath}</p>
        <a className="articleLink" href={url}>Saiba mais</a>
      </div>
    </article>
  )
}