import React from 'react';
import './Global.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Aniversariantes from './components/Aniversariantes/GridAniversariantes'
import GridLinks from './components/LinksUteis/GridLinks'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Aniversariantes/>
      <GridLinks/>
    </div>
  );
}

export default App;