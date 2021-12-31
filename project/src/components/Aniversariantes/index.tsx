import Aniversariante from "./AniversarianteCard";
import { content } from "./Content";
import styles from "./styles.module.css";

export function GridAniversariantes() {
  return (
    <section
      id="Aniversariantes"
      className={`${styles.aniversariantes} container`}
    >
      <h2 className={styles.titleAniversarante}>Aniversariantes do mês</h2>
      <div className={styles.gridAniversariantes}>
        {content.map((item) => {
          return (
            <Aniversariante
              key={item.id}
              id={item.id}
              name={item.name}
              sexo={item.sexo}
              date={item.date}
              sector={item.sector}
            />
          );
        })}
      </div>
    </section>
  );
}
