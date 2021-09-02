import React from 'react'
import Aniversariantes from '../components/Aniversariantes/GridAniversariantes'
import ArticleGrid from '../components/GridNoticias/GridNoticias'
import GridLinks from '../components/GridLinksUteis/GridLinksUteis'

export default function Home() {
  return (
    <main>
      <Aniversariantes/>
      <ArticleGrid/>
      <GridLinks/>
    </main>
  )
}
