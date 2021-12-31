import React from "react";
import LinkCard from "./LinkCard";
import { content } from "./Content";
import styles from "./styles.module.css";

export function GridLinks() {
  return (
    <section 
      id="LinksUteis"
      className={`${styles.LinksUteis} container`}
    >
      <h2 className={styles.titleLinksUteis}>Links Úteis</h2>
      <div className={styles.gridLinks}>
        {content.map((item) => {
          return (
            <LinkCard
              key={item.id}
              id={item.id}
              name={item.name}
              paragrath={item.paragrath}
              url={item.url}
              img={item.img}
            />
          );
        })}
      </div>
    </section>
  );
}
