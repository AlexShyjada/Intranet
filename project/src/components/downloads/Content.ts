export interface downloadData {
  key: number;
  id: number;
  Title: string;
  Date: string;
  Size: string;
  Local: string;
}

export const contentDownloads: downloadData[] = [
  {
    key: 1,
    id: 1,
    Title: "Identidade visual da Prefeitura",
    Date: "12/03/2021",
    Size: "9401 KB",
    Local: "/assets/Downloads/manual-da-marca-da-prefeitura.pdf",
  },
  {
    key: 2,
    id: 2,
    Title: "Guia de acesso a VPN",
    Date: "23/07/2021",
    Size: "2799 KB",
    Local: "/assets/Downloads/guia-de-acesso-a-vpn.pdf",
  },
  {
    key: 3,
    id: 3,
    Title: "Manual de Estagio",
    Date: "12/03/2021",
    Size: "5344 KB",
    Local: "/assets/Downloads/manual-de-estagio.pdf",
  },
  {
    key: 4,
    id: 4,
    Title: "Logomarcas da Saltur e da Prefeitura",
    Date: "12/03/2021",
    Size: "0000 KB",
    Local: "#",
  },
  {
    key: 4,
    id: 4,
    Title: "Lista de ramais Saltur",
    Date: "12/03/2021",
    Size: "0000 KB",
    Local: "#",
  },
]
