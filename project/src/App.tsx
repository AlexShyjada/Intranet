import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home'
import LinksUteis from './Pages/LinksUteis'
import Noticias from './Pages/Noticias'
import Ramais from './Pages/Ramais'
import Downloads from './Pages/Downloads'
import Missao from './Pages/MissaoVisaoValores'
import NossaEquipe from './Pages/NossaEquipe'
import RegimentoInterno from './Pages/RegimentoInterno'
import Organograma from './Pages/Organograma'
import CodigoDeConduta from './Pages/CodigoDeConduta'
import AssinaturaEmail from './Pages/AssinaturaEmail'
import './Global.css'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Hero/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="missao" element={<Missao />} />
        <Route path="nossa-equipe" element={<NossaEquipe />} />
        <Route path="regimento-interno" element={<RegimentoInterno />} />
        <Route path="organograma" element={<Organograma />} />
        <Route path="codigo-de-conduta" element={<CodigoDeConduta />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="links-uteis" element={<LinksUteis />} />
        <Route path="ramais" element={<Ramais />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="assinatura-email" element={<AssinaturaEmail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;