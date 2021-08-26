import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home'
import SobreNos from './Pages/SobreNos'
import LinksUteis from './Pages/LinksUteis'
import Noticias from './Pages/Noticias'
import Ramais from './Pages/Ramais'
import Downloads from './Pages/Downloads'
import Missao from './Pages/MissaoVisaoValores'
import NossaEquipe from './Pages/NossaEquipe'
import RegimentoInterno from './Pages/RegimentoInterno'
import Organograma from './Pages/Organograma'
import CodigoDeConduta from './Pages/CodigoDeConduta'
import './Global.css'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Hero/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre-nos" element={<SobreNos/>} />
        <Route path="sobre-nos/*" element={<SobreNos />}>
          <Route path="missao" element={<Missao />} />
          <Route path="nossa-equipe" element={<NossaEquipe />} />
          <Route path="regimento-interno" element={<RegimentoInterno />} />
          <Route path="organograma" element={<Organograma />} />
          <Route path="codigo-de-conduta" element={<CodigoDeConduta />} />
        </Route>
        <Route path="noticias" element={<Noticias />} />
        <Route path="links-uteis" element={<LinksUteis />} />
        <Route path="ramais" element={<Ramais />} />
        <Route path="downloads" element={<Downloads />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;