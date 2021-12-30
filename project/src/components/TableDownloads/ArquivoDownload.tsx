import { downloadData } from "./Content";
import styles from "./styles.module.css";

export default function ArquivoDownload(props: downloadData) {
  const { Title, Date, Size, Local } = props;
  return (
    <tr className={styles.arquivoDownItems}>
      <td className={`${styles.arquivoDownItem} ${styles.title}`}>{Title}</td>
      <td className={`${styles.arquivoDownItem} ${styles.date}`}>{Date}</td>
      <td className={`${styles.arquivoDownItem} ${styles.size}`}>{Size}</td>
      <td className={`${styles.arquivoDownItem} ${styles.link}`}>
        <a href={Local} target="_blank" rel="noreferrer">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6011 15.1865V19.1865C21.6011 19.717 21.3904 20.2257 21.0153 20.6007C20.6402 20.9758 20.1315 21.1865 19.6011 21.1865H5.60107C5.07064 21.1865 4.56193 20.9758 4.18686 20.6007C3.81179 20.2257 3.60107 19.717 3.60107 19.1865V15.1865"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.60107 10.1865L12.6011 15.1865L17.6011 10.1865"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6011 15.1865V3.18652"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </td>
    </tr>
  );
}
