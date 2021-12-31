import styles from "./styles.module.css";

export function Hero() {
  return (
    <section>
      <div
        className={styles.imgHeroSection}
        style={{ background: `url(/assets/Hero/imgHero.png) no-repeat center` }}
      ></div>
      <div className={styles.articleHero}>
        <article className={`${styles.article} container`}>
          <h1 className={styles.titleHero}>
            Recadastramento dos aniversariantes do mês de dezembro
          </h1>
          <p className={styles.paragrathHero}>
            Atenção! Está fazendo aniversário esse mês? Então não se esqueça de
            fazer o recadastramento na plataforma da Secretaria Municipal de
            Gestão - SEMGE
          </p>
          <a
            className={styles.btnHero}
            href="https://www.recadastramento.salvador.ba.gov.br/ativo/login"
            target="_blank"
            rel="noreferrer"
          >
            Saiba Mais
          </a>
        </article>
      </div>
    </section>
  );
}
