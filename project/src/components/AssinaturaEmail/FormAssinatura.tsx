import React, { FormEvent, useState } from 'react'
import './formAssinatura.css'

export default function FormAssinatura() {
  const [name, setName] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [orgao, setOrgao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [assinatura, setAssinatura] = useState([]);

  function handleAssinatura (event: FormEvent) {
    event.preventDefault();
    setName('')
    setCargo('')
    setTelefone('')
    setOrgao('')
    setEndereco('')
    alert("Assinatura criada, tire print da imagem")
  }

  return (
    <section id="assinatura" className="container">
      <h2>Gerar Assinatura de Email</h2>
      <p className="descriptionForm">
        Preencha os seus dados abaixo e a assinatura será gerada
      </p>

        <section id="app-assinatura" className="app-assinatura">
          <form onSubmit={handleAssinatura}>
          <div className="inputGroup">
            <label>Nome</label>
            <input 
              type="text" 
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          
          <div className="inputGroup">
            <label>Cargo ou Setor</label>
            <input 
              type="text" 
              placeholder="Seu Cargo ou setor"
              onChange={(e) => setCargo(e.target.value)}
              value={cargo}
            />
          </div>

          <div className="inputGroup">
            <label>Telefone</label>
            <input
              type="text" 
              placeholder="Telefone"
              onChange={(e) => setTelefone(e.target.value)}
              value={telefone}
            />
          </div>

          <div className="inputGroup">
            <label>Órgão</label>
            <input 
              type="text" 
              placeholder="Nome do órgão"
              onChange={(e) => setOrgao(e.target.value)}
              value={orgao}
            />
          </div>

          <div className="inputGroup">
            <label>Endereço</label>
            <input 
              type="text" 
              placeholder="Endereço do órgão"
              onChange={(e) => setEndereco(e.target.value)}
              value={endereco}
            />
          </div>

          <button>
            Gerar Assinatura
          </button>

        </form>

        <div className="assinatura">
          <div className="infoAssinatura">
            <span className="nomeFuncionario">{name}</span>
            <span className="cargoFuncionario">{cargo}</span>
            <span className="telefoneOrgao">{telefone}</span>
            <span className="nomeOrgao">{orgao}</span>
            <span className="enderecoOrgao">{endereco}</span>
          </div>
          <div className="assinaturaEmail">
            <img src="/assets/AssinaturaEmail/assinatura-email.png" alt="bgAssinatura"/>
          </div>
        </div>
        
      </section>
        
    </section>
  )
}
