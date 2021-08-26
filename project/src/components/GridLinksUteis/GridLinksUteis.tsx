import React from 'react'
import LinkCard from './LinkCard'
import { content } from './Content'
import './gridLinks.css'

export default function GridLinks() {
  return (
    <section id="LinksUteis" className="container LinksUteis">
      <h2 className="titleLinksUteis">Links Úteis</h2>
      <div className="gridLinks">
        {content.map((item) => {
          return(
          <LinkCard
              key={item.key}
              id={item.id}
              name={item.name}
              paragrath={item.paragrath}
              url={item.url}
              img={item.img}
          />
          )
        })}
      </div>
    </section>
  )
}
