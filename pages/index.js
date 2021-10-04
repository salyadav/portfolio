import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock>
      <Hero />
      <FavouriteProjects />
      {/* <LatestCode repositories={repositories} /> */}
    </ContainerBlock>
  );
}

// export const getServerSideProps = async () => {
  // let token = process.env.GITHUB_AUTH_TOKEN;

  // const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  // return {
  //   props: {
  //     repositories,
  //   },
  // };
// };

//https://manuarora.in/