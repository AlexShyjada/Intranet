import React from 'react';
import './Global.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Aniversariantes from './components/Aniversariantes/GridAniversariantes'
import GridLinks from './components/LinksUteis/GridLinks'
import ArticleGrid from './components/Articles/AticleGrid'
import Footer from './components/Footer/Footer'
import TableRamais from './components/Ramais/TableRamais'
import TableEquipe from './components/Equipe/TableEquipe'
import TableDownloads from './components/downloads/TableDownloads'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Aniversariantes />
      <GridLinks />
      <ArticleGrid />
      <TableEquipe />
      <TableRamais />
      <TableDownloads />
      <Footer />
    </div>
  );
}

export default App;