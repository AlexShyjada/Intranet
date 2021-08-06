import React from 'react';
import './Global.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Aniversariantes from './components/Aniversariantes/GridAniversariantes'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Aniversariantes/>
    </div>
  );
}

export default App;