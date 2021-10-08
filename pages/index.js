import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import Recommendations from "../components/Recommendations";
import Hero from "../components/Hero";

export default function Home({ repositories }) {
  return (
    <ContainerBlock>
      <Hero />
      <Recommendations />
      {/* <FavouriteProjects /> */}
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