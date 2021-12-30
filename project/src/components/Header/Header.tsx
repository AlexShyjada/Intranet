import Link from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header id="header" className="header">
      <nav className="container nav">
        <img src="./assets/logosaltur.svg" alt="Logo Saltur" />
        <ul className="navLinks">
          <li>
            <a className={styles.linkHeader}>
              Home
            </a>
          </li>
          <li>
            <a className={styles.linkHeader}>
              Notícias
            </a>
          </li>
          <li>
            <a className={styles.linkHeader}>
              Links Úteis
            </a>
          </li>
          <li>
            <a className={styles.linkHeader}>
              Ramais
            </a>
          </li>
          <li>
            <a className={styles.linkHeader}>
              Downloads
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
