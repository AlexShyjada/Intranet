import React from 'react'
import {content} from './Content'
import Article from './Article'
import './ArticleGrid.css'

export default function AticleGrid() {
  return (
    <section id="Noticias" className="container noticias">
      <h2 className="titleNoticias">Notícias</h2>
      <div className="gridNoticias">
        {content.map((item) =>{
          return(
            <Article
              key={item.key}
              id={item.id}
              img={item.img}
              title={item.title}
              paragrath={item.paragrath}
              url={item.url}
            />
          )
        })}
      </div>
    </section>
  )
}
