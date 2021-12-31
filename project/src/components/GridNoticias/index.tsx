import { content } from "./Content";
import Article from "./Article";
import styles from "./styles.module.css";

export function GridNoticias() {
  return (
    <section id="Noticias" className={`${styles.noticias} container`}>
      <h2 className={styles.titleNoticias}>Notícias</h2>
      <div className={styles.gridNoticias}>
        {content.map((item) => {
          return (
            <Article
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              paragrath={item.paragrath}
              url={item.url}
            />
          );
        })}
      </div>
    </section>
  );
}
