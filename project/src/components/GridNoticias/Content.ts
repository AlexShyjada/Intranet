export interface articleData{
  id: number;
  img: string;
  title: string;
  paragrath: string;
  url: string;
}

export const content: articleData[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    title: "Infectologista reforça a importância de não escolher imunizante",
    paragrath: "Para avançar ainda mais no controle da pandemia de Covid-19, os especialistas em saúde afirmam: vacina boa é vacina no braço. A infectologista da Secretaria Municipal da Saúde (SMS), Adielma Nizarala, adverte sobre os riscos de escolher a vacina contra a Covid com base no laboratório fabricante e defendeu o imunizante disponível nos postos, seja ele qual for, a fim conter a pandemia o mais rápido possível.",
    url: "#"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Programa de Valorização do Servidor",
    paragrath: "O servidor municipal dispõe de um conjunto de benefícios oferecidos através do Programa de Valorização do Servidor (PVS), muitos dos quais extensivos aos seus dependentes. O PVS atua em várias frentes: educacional, corporativa, financeira e social, com a finalidade de estimular o crescimento pessoal e o aperfeiçoamento profissional dos colaboradores da Prefeitura de Salvador.",
    url: "#"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1615631648086-325025c9e51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Vacina express mantém agendamento para imunização em casa",
    paragrath: "O serviço Vacina Express prossegue em Salvador com agendamento aberto para imunização em casa contra a Covid-19. O pedido pode ser feito na plataforma on-line a partir das 8h, através do site vacinaexpress.saude.salvador.ba.gov.br",
    url: "#"
  },
]