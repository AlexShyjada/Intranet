export interface articleData{
  key: number;
  id: number;
  img: string;
  title: string;
  paragrath: string;
  url: string;
}

export const content: articleData[] = [
  {
    key: 1,
    id: 1,
    img: "/assets/Articles/img-noticia-vazia.png",
    title: "Infectologista reforça a importância de não escolher imunizante",
    paragrath: "Para avançar ainda mais no controle da pandemia de Covid-19, os especialistas em saúde afirmam: vacina boa é vacina no braço. A infectologista da Secretaria Municipal da Saúde (SMS), Adielma Nizarala, adverte sobre os riscos de escolher a vacina contra a Covid com base no laboratório fabricante e defendeu o imunizante disponível nos postos, seja ele qual for, a fim conter a pandemia o mais rápido possível.",
    url: "#"
  },
  {
    key: 2,
    id: 2,
    img: "/assets/Articles/img-noticia-vazia.png",
    title: "Programa de Valorização do Servidor",
    paragrath: "O servidor municipal dispõe de um conjunto de benefícios oferecidos através do Programa de Valorização do Servidor (PVS), muitos dos quais extensivos aos seus dependentes. O PVS atua em várias frentes: educacional, corporativa, financeira e social, com a finalidade de estimular o crescimento pessoal e o aperfeiçoamento profissional dos colaboradores da Prefeitura de Salvador.",
    url: "#"
  },
  {
    key: 3,
    id: 3,
    img: "/assets/Articles/img-noticia-vazia.png",
    title: "Vacina express mantém agendamento para imunização em casa",
    paragrath: "O serviço Vacina Express prossegue em Salvador com agendamento aberto para imunização em casa contra a Covid-19. O pedido pode ser feito na plataforma on-line a partir das 8h, através do site vacinaexpress.saude.salvador.ba.gov.br",
    url: "#"
  },
]