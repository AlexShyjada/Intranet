import { contentPresidencia } from "./Content";
import { contentDirAdmFin } from "./Content";
import { contentDirEventos } from "./Content";
import Funcionario from "./Funcionario";
import styles from "./styles.module.css";

export default function TableRamais() {
  return (
    <section>
      <h2 className={styles.titleEquipe}>Equipe da Saltur</h2>
      <div className={styles.andar}>
        <h3 className={styles.titleSetor}>Presidência</h3>
        <table className={`${styles.funcionariosList} container`}>
          <thead id="cabecalho">
            <tr className={styles.funcCabecalhoItems}>
              <th className={`${styles.funcCabecalhoItem} ${styles.funcNome}`}>
                Nome
              </th>
              <th className={`${styles.funcCabecalhoItem} ${styles.funcSetor}`}>
                Setor
              </th>
              <th className={`${styles.funcCabecalhoItem} ${styles.funcCargo}`}>
                Cargo
              </th>
            </tr>
          </thead>
          <tbody>
            {contentPresidencia.map((item) => {
              return (
                <Funcionario
                  key={item.id}
                  id={item.id}
                  Nome={item.Nome}
                  Setor={item.Setor}
                  Cargo={item.Cargo}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.andar}>
        <h3 className={styles.titleSetor}>Diretoria Administrativa Financeira</h3>
        <table className={`container ${styles.funcionariosList}`}>
        <thead id="cabecalho">
            <tr className={styles.funcCabecalhoItems}>
              <th className={`${styles.funcCabecalhoItem} ${styles.funcNome}`}>
                Nome
              </th>
              <th className={`${styles.funcCabecalhoItem} ${styles.funcSetor}`}>
                Setor
              </th>
              <th className={`${styles.funcCabecalhoItem} ${styles.funcCargo}`}>
                Cargo
              </th>
            </tr>
          </thead>
          <tbody>
            {contentDirAdmFin.map((item) => {
              return (
                <Funcionario
                  key={item.id}
                  id={item.id}
                  Nome={item.Nome}
                  Setor={item.Setor}
                  Cargo={item.Cargo}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.andar}>
        <h3 className={styles.titleSetor}>Diretoria de Eventos</h3>
        <table className={`container ${styles.funcionariosList}`}>
        <thead id="cabecalho">
            <tr className={styles.funcCabecalhoItems}>
              <th className={`${styles.funcCabecalhoItem} ${styles.funcNome}`}>
                Nome
              </th>
              <th className={`${styles.funcCabecalhoItem} ${styles.funcSetor}`}>
                Setor
              </th>
              <th className={`${styles.funcCabecalhoItem} ${styles.funcCargo}`}>
                Cargo
              </th>
            </tr>
          </thead>
          <tbody>
            {contentDirEventos.map((item) => {
              return (
                <Funcionario
                  key={item.id}
                  id={item.id}
                  Nome={item.Nome}
                  Setor={item.Setor}
                  Cargo={item.Cargo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
