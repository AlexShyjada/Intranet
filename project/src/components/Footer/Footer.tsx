import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container gridFooter">
        <img className="logoSalturFooter" src="/assets/logosaltur2.svg" alt="" />
        <img className="logoNTI" src="/assets/logonti2.svg" alt="Logo NTI" />
        <div className="colunaDeLinks one">            
            <a className="link-footer" href="http://177.20.6.123/SIGP/portal/" target="_blank">Contracheque</a>
            <a className="link-footer" href="http://www.dom.salvador.ba.gov.br/" target="_blank">Diario Oficial</a>
            <a className="link-footer" href="http://portalesalvador.salvador.ba.gov.br/" target="_blank">eSalvador</a>
            <a className="link-footer" href="https://www.tcm.ba.gov.br" target="_blank">TCM</a>
        </div>

        <div className="colunaDeLinks two">
          <a className="link-footer" href="http://curtacarnaval.com.br/" target="_blank">Carnaval de Salvador</a>
          <a className="link-footer" href="http://www.salvadorvaidebike.salvador.ba.gov.br/" target="_blank">SSA Vai de Bike</a>
          <a className="link-footer" href="http://www.festivaldacidade.salvador.ba.gov.br/" target="_blank">Festival da Cidade</a>
          <a className="link-footer" href="http://reveillon.salvador.ba.gov.br/" target="_blank">Virada Salvador</a>                        
        </div>
      </div>
      <div className="copy ">
        <p className="textCopy container">Copyright © 2021 -  Desenvolvido por NTI - SALTUR - Empresa Salvador Turismo</p>
      </div>
    </footer>
  )
}
