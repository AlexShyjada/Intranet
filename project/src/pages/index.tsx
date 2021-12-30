import type { NextPage } from "next";

import Aniversariantes from '../components/Aniversariantes/GridAniversariantes'
import ArticleGrid from '../components/GridNoticias/GridNoticias'
import GridLinks from '../components/GridLinksUteis/GridLinksUteis'

const Home: NextPage = () => {
  return (
    <>
      <Aniversariantes />
      <ArticleGrid />
      <GridLinks />
    </>
  );
};

export default Home;
