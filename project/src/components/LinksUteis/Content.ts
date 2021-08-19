export interface linksData{
  key: number;
  id: number;
  name: string;
  paragrath: string;
  url: string;
  img: string;
}

export const content: linksData[] = [
  {
    key: 1,
    id: 1,
    name: "Webmail da Prefeitura de Salvador",
    paragrath: "Acessar email intitucional da Prefeitura.",
    url: "https://webmail.salvador.ba.gov.br/",
    img: "/assets/LinksUteis/link-webmail.png"
  },
  {
    key: 2,
    id: 2,
    name: "Sistema e-Salvador",
    paragrath: "Sistema de tramitação, consulta de atos administrativos da Prefeitura.",
    url: "http://portalesalvador.salvador.ba.gov.br/",
    img: "/assets/LinksUteis/link-esalvador.png"
  },
  {
    key: 3,
    id: 3,
    name: "Chamados NTI",
    paragrath: "Abra chamados em caso de problemas técnicos.",
    url: "http://www.dom.salvador.ba.gov.br/",
    img: "/assets/LinksUteis/link-chamadonti.png"
  },
  {
    key: 4,
    id: 4,
    name: "Nota Fiscal Salvador",
    paragrath: "Verificar a autenticidade de Notas Fiscais e outros serviços.",
    url: "https://nfse.salvador.ba.gov.br/",
    img: "/assets/LinksUteis/link-notafiscal.png"
  },
  {
    key: 5,
    id: 5,
    name: "Tribunal de Contas dos Municípios - TCM",
    paragrath: "Acesso ao site do Tribunal de Contas dos Municipios.",
    url: "https://www.tcm.ba.gov.br/",
    img: "/assets/LinksUteis/link-tcm.png"
  },
  {
    key: 6,
    id: 6,
    name: "Diario Oficial do Município de Salvador",
    paragrath: "Consulta de publicações oficiais da Prefeitura.",
    url: "http://www.dom.salvador.ba.gov.br/",
    img: "/assets/LinksUteis/link-diariooficial.png"
  }
]
