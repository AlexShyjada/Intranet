export interface downloadData {
  id: number;
  Title: string;
  Date: string;
  Size: string;
  Local: string;
}

export const contentDownloads: downloadData[] = [
  {
    id: Math.random(),
    Title: "Identidade visual da Prefeitura",
    Date: "12/03/2021",
    Size: "9401 KB",
    Local: "/assets/Downloads/manual-da-marca-da-prefeitura.pdf",
  },
  {
    id: Math.random(),
    Title: "Guia de acesso a VPN",
    Date: "23/07/2021",
    Size: "2799 KB",
    Local: "/assets/Downloads/guia-de-acesso-a-vpn.pdf",
  },
  {
    id: Math.random(),
    Title: "Manual de Estagio",
    Date: "12/03/2021",
    Size: "5344 KB",
    Local: "/assets/Downloads/manual-de-estagio.pdf",
  },
  {
    id: Math.random(),
    Title: "Logomarcas da Saltur e da Prefeitura",
    Date: "12/03/2021",
    Size: "0000 KB",
    Local: "#",
  },
  {
    id: Math.random(),
    Title: "Lista de ramais Saltur",
    Date: "12/03/2021",
    Size: "0000 KB",
    Local: "#",
  },
]
