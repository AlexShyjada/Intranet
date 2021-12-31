export interface downloadData {
  id: number;
  Title: string;
  Date: string;
  Size: string;
  Local: string;
}

export const contentDownloads: downloadData[] = [
  {
    id: 1,
    Title: "Identidade visual da Prefeitura",
    Date: "12/03/2021",
    Size: "9401 KB",
    Local: "/assets/Downloads/manual-da-marca-da-prefeitura.pdf",
  },
  {
    id: 2,
    Title: "Guia de acesso a VPN",
    Date: "23/07/2021",
    Size: "2799 KB",
    Local: "/assets/Downloads/guia-de-acesso-a-vpn.pdf",
  },
  {
    id: 3,
    Title: "Manual de Estagio",
    Date: "12/03/2021",
    Size: "5344 KB",
    Local: "/assets/Downloads/manual-de-estagio.pdf",
  },
  {
    id: 4,
    Title: "Logomarcas da Saltur e da Prefeitura",
    Date: "12/03/2021",
    Size: "2 MB",
    Local: "#",
  },
  {
    id: 5,
    Title: "Lista de ramais Saltur",
    Date: "12/03/2021",
    Size: "110 KB",
    Local: "#",
  },
]
