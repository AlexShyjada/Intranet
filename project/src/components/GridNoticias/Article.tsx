import React from "react";
import { articleData } from "./Content";
import styles from "./styles.module.css";

export default function Article(props: articleData) {
  const { img, title, paragrath, url } = props;
  return (
    <article className={styles.noticia}>
      <div
        className={styles.imgArticle}
        style={{
          background: `url(${img}) no-repeat center`,
          backgroundSize: `cover`,
        }}
      ></div>
      <div className={styles.contentArticle}>
        <h3 className={styles.articleTitle}>{title}</h3>
        <p className={styles.paragrathArticle}>{paragrath}</p>
        <a className={styles.articleLink} href={url}>
          Saiba mais
        </a>
      </div>
    </article>
  );
}
