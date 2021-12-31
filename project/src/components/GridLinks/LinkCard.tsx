import React from "react";
import { linksData } from "./Content";
import styles from "./styles.module.css";

export default function LinkCard(props: linksData) {
  const { name, paragrath, url, img } = props;
  return (
    <article className={styles.cardLink}>
      <div
        className={styles.imgLink}
        style={{
          background: `url(${img}) no-repeat center`,
          backgroundSize: `cover`,
        }}
      ></div>
      <div className={styles.contentLink}>
        <h3 className={styles.titleLink}>{name}</h3>
        <p className={styles.paragrathLink}>{paragrath}</p>
        <a
          className={styles.btnLink}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Ir para o link
        </a>
      </div>
    </article>
  );
}
