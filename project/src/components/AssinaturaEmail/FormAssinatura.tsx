import { FormEvent, useState } from "react";
import styles from "./styles.module.css";

export default function FormAssinatura() {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [orgao, setOrgao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [assinatura, setAssinatura] = useState([]);

  function handleAssinatura(event: FormEvent) {
    event.preventDefault();
    setName("");
    setCargo("");
    setTelefone("");
    setOrgao("");
    setEndereco("");
    alert("Assinatura criada, tire print da imagem");
  }

  return (
    <section id="assinatura" className="container">
      <h2 className={styles.titleAssinatura}>Gerar Assinatura de Email</h2>
      <p className={styles.descriptionForm}>
        Preencha com os seus dados e a assinatura será gerada
      </p>

      <section id="app-assinatura" className={styles.appAssinatura}>
        <form onSubmit={handleAssinatura}>
          <div className={styles.inputGroup}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Cargo ou Setor</label>
            <input
              type="text"
              placeholder="Seu Cargo ou setor"
              onChange={(e) => setCargo(e.target.value)}
              value={cargo}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Telefone</label>
            <input
              type="text"
              placeholder="Telefone"
              onChange={(e) => setTelefone(e.target.value)}
              value={telefone}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Órgão</label>
            <input
              type="text"
              placeholder="Nome do órgão"
              onChange={(e) => setOrgao(e.target.value)}
              value={orgao}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Endereço</label>
            <input
              type="text"
              placeholder="Endereço do órgão"
              onChange={(e) => setEndereco(e.target.value)}
              value={endereco}
            />
          </div>

          <button className={styles.btnFormAssinatura}>Fazer Download</button>
        </form>

        <div className={styles.containerAssinatura}>
          <div className={styles.assinatura}>
            <div className={styles.infoAssinatura}>
              <span className={styles.nomeFuncionario}>
                {name === "" ? "Seu Nome" : name}
              </span>
              <span className={styles.cargoFuncionario}>
                {cargo === "" ? "Seu cargo ou setor" : cargo}
              </span>
              <span className={styles.telefoneOrgao}>
                +55 (71) {telefone === "" ? "Telefone corporativo" : telefone}
              </span>
              <span className={styles.nomeOrgao}>
                {orgao === "" ? "Nome do seu órgão" : orgao}
              </span>
              <span className={styles.enderecoOrgao}>
                {endereco === "" ? "Endereço do órgão" : endereco}
              </span>
            </div>
            <div className={styles.assinaturaEmail}>
              <img
                src="/assets/AssinaturaEmail/assinatura-email.png"
                alt="bgAssinatura"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
