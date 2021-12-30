import { aniversarianteData } from "./Content";
import styles from "./styles.module.css";

export default function Aniversariante(props: aniversarianteData) {
  const { name, sexo, date, sector } = props;
  return (
    <div className={styles.aniversariante}>
      <figure className={styles.aniversariante}>
        <img
          src={`${
            sexo === "m"
              ? `/assets/Aniversariantes/avatar-masculino.svg`
              : `/assets/Aniversariantes/avatar-feminino.svg`
          }`}
          alt="Avatar Aniversariante"
        />
      </figure>
      <article className={styles.aniversarianteData}>
        <h3 className={styles.aniverTitle}>{name}</h3>
        <p className={styles.aniverParagrath}>{date}</p>
        <p className={styles.aniverSector}>{sector}</p>
      </article>
    </div>
  );
}
