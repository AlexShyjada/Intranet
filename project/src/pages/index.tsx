import type { NextPage } from "next";

import { GridNoticias, GridAniversariantes, GridLinks } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <GridAniversariantes />
      <GridNoticias />
      <GridLinks />
    </>
  );
};

export default Home;
