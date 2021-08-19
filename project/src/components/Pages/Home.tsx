import React from 'react'
import Aniversariantes from '../Aniversariantes/GridAniversariantes'
import ArticleGrid from '../Articles/AticleGrid'
import GridLinks from '../LinksUteis/GridLinks'

export default function Home() {
  return (
    <main>
      <Aniversariantes/>
      <ArticleGrid/>
      <GridLinks/>
    </main>
  )
}
