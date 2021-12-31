import Link from "next/link";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header id="header" className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <img src="./assets/logosaltur.svg" alt="Logo Saltur" />
        <ul className={styles.navLinks}>
          <li className={styles.linkHeader}>
            <Link href="/" passHref>
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.linkHeader}>
            <Link href="/noticias" passHref>
              <span>Notícias</span>
            </Link>
          </li>
          <li className={styles.linkHeader}>
            <Link href="/linksuteis" passHref>
              <span>Links Úteis</span>
            </Link>
          </li>
          <li className={styles.linkHeader}>
            <Link href="/ramais" passHref>
              <span>Ramais</span>
            </Link>
          </li>
          <li className={styles.linkHeader}>
            <Link href="/downloads" passHref>
              <span>Downloads</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
