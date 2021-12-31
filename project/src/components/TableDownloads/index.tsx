import { contentDownloads } from "./Content";
import ArquivoDownload from "./ArquivoDownload";
import styles from "./styles.module.css";

export function TableDownloads() {
  return (
    <section>
      <h2 className={styles.titleDownloads}>Downloads</h2>
      <table className={`${styles.downloadsList} container`}>
        <thead id="cabecalho">
          <tr className={styles.downCabecalhoItems}>
            <th className={`${styles.downCabecalhoItem} ${styles.downArquivo}`}>
              Arquivo
            </th>
            <th className={`${styles.downCabecalhoItem} ${styles.downData}`}>
              Data de publicação
            </th>
            <th className={`${styles.downCabecalhoItem} ${styles.downTamanho}`}>
              Tamanho
            </th>
            <th className={`${styles.downCabecalhoItem} ${styles.downLink}`}>
              Download
            </th>
          </tr>
        </thead>
        <tbody>
          {contentDownloads.map((item) => {
            return (
              <ArquivoDownload
                key={item.id}
                id={item.id}
                Title={item.Title}
                Date={item.Date}
                Size={item.Size}
                Local={item.Local}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
