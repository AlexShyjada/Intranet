import React from 'react'
import {content} from './Content'
import Article from './Article'
import './articleGrid.css'

export default function AticleGrid() {
  return (
    <section id="Noticias" className="container noticias">
      <h2 className="titleNoticias">Notícias</h2>
      <div className="gridNoticias">
        {content.map((item) =>{
          return(
            <Article
              key={item.id}
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
