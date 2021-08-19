import React from 'react'
import { contentDownloads } from './Content'
import ArquivoDownload from './ArquivoDownload'
import './Downloads.css'

export default function TableDownloads() {
  return (
    <section>
      <h2 className="titleDownloads">Downloads</h2>
      <table className="container downloadsList">
        <thead id="cabecalho">
          <tr className="downCabecalhoItems">
            <th className="downCabecalhoItem downArquivo">Arquivo</th>
            <th className="downCabecalhoItem downData">Data de publicação</th>
            <th className="downCabecalhoItem downTamanho">Tamanho</th>
            <th className="downCabecalhoItem downLink">Download</th>
          </tr>
        </thead>
        <tbody>
          {contentDownloads.map((item) => {
            return (
              <ArquivoDownload
                key={item.key}
                id={item.id}
                Title={item.Title}
                Date={item.Date}
                Size={item.Size}
                Local={item.Local}
              />
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
