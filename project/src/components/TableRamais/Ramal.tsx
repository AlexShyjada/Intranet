import { ramalData } from './Content'
import styles from './styles.module.css'

export default function Ramal(props: ramalData) {
  const { Setor, Atendente, Ramal } = props
  return (
    <tr className={styles.ramalItems}>
      <td className={`${styles.ramalItem} ${styles.setor}`}>{Setor}</td>
      <td className={`${styles.ramalItem} ${styles.nome}`}>{Atendente}</td>
      <td className={`${styles.ramalItem} ${styles.ramal}`}>{Ramal}</td>
    </tr>
  )
}
