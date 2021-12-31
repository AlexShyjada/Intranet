import { contentSegundoAndar } from './Content'
import { contentPrimeiroAndar } from './Content'
import { contentMezanino } from './Content'
import { contentTerreo } from './Content'
import Ramal from './Ramal'
import styles from './styles.module.css'

export function TableRamais() {
  return (
    <section>
      <h2 className={styles.titleRamais}>Ramais Saltur</h2>
      <div className={styles.andar}>
        <h3 className={styles.titleAndar}>Segundo Andar</h3>
        <table className={`container ${styles.ramalList}`}>
          <thead id="cabecalho">
            <tr className={styles.cabecalhoItems}>
              <th className={`${styles.cabecalhoItem} ${styles.setor}`}>Setor</th>
              <th className={`${styles.cabecalhoItem} ${styles.nome}`}>Nome</th>
              <th className={`${styles.cabecalhoItem} ${styles.ramal}`}>Ramal</th>
            </tr>
          </thead>
          <tbody>
            {contentSegundoAndar.map((item) => {
              return (
                <Ramal
                  key={item.id}
                  id={item.id}
                  Setor={item.Setor}
                  Atendente={item.Atendente}
                  Ramal={item.Ramal}
                />
              )
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.andar}>
        <h3 className={styles.titleAndar}>Primeiro Andar</h3>
        <table className={`container ${styles.ramalList}`}>
          <thead id="cabecalho">
            <tr className={styles.cabecalhoItems}>
              <th className={`${styles.cabecalhoItem} ${styles.setor}`}>Setor</th>
              <th className={`${styles.cabecalhoItem} ${styles.nome}`}>Nome</th>
              <th className={`${styles.cabecalhoItem} ${styles.ramal}`}>Ramal</th>
            </tr>
          </thead>
          <tbody>
            {contentPrimeiroAndar.map((item) => {
              return (
                <Ramal
                  key={item.id}
                  id={item.id}
                  Setor={item.Setor}
                  Atendente={item.Atendente}
                  Ramal={item.Ramal}
                />
              )
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.andar}>
        <h3 className={styles.titleAndar}>Mezanino</h3>
        <table className={`container ${styles.ramalList}`}>
          <thead id="cabecalho">
            <tr className={styles.cabecalhoItems}>
              <th className={`${styles.cabecalhoItem} ${styles.setor}`}>Setor</th>
              <th className={`${styles.cabecalhoItem} ${styles.nome}`}>Nome</th>
              <th className={`${styles.cabecalhoItem} ${styles.ramal}`}>Ramal</th>
            </tr>
          </thead>
          <tbody>
            {contentMezanino.map((item) => {
              return (
                <Ramal
                  key={item.id}
                  id={item.id}
                  Setor={item.Setor}
                  Atendente={item.Atendente}
                  Ramal={item.Ramal}
                />
              )
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.andar}>
        <h3 className={styles.titleAndar}>Térreo</h3>
        <table className={`container ${styles.ramalList}`}>
        <thead id="cabecalho">
            <tr className={styles.cabecalhoItems}>
              <th className={`${styles.cabecalhoItem} ${styles.setor}`}>Setor</th>
              <th className={`${styles.cabecalhoItem} ${styles.nome}`}>Nome</th>
              <th className={`${styles.cabecalhoItem} ${styles.ramal}`}>Ramal</th>
            </tr>
          </thead>
          <tbody>
            {contentTerreo.map((item) => {
              return (
                <Ramal
                  key={item.id}
                  id={item.id}
                  Setor={item.Setor}
                  Atendente={item.Atendente}
                  Ramal={item.Ramal}
                />
              )
            })}
          </tbody>
        </table>
      </div>

    </section>
  )
}
