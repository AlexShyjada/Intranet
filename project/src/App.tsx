import React from 'react';
import './Global.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Aniversariantes from './components/Aniversariantes/GridAniversariantes'
import GridLinks from './components/LinksUteis/GridLinks'
import ArticleGrid from './components/Articles/AticleGrid'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Aniversariantes/>
      <GridLinks/>
      <ArticleGrid/>
    </div>
  );
}

export default App;