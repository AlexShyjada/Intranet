export interface aniversarianteData{
  key: number;
  id: number;
  name: string;
  sexo: string;
  date: string;
  sector: string;
}

export const content: aniversarianteData[] = [
  {
    key: 1,
    id: 1,
    sexo: "m",
    name: "Alex Saldanha",
    date: "08 de Agosto",
    sector: "Contratos e Convenhos"
  },
  {
    key: 2,
    id: 2,
    sexo: "f",
    name: "Carine Bomfim",
    date: "08 de Agosto",
    sector: "Eventos"
  },
  {
    key: 3,
    id: 3,
    sexo: "f",
    name: "Tereza Ferreira",
    date: "26 de Agosto",
    sector: "GERFIM"
  }
]