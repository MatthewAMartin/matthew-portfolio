import Landing from "../components/Landing/Landing";
import AboutMe from "../components/AboutMe/AboutMe";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { Layout } from "../layout/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(router.asPath.slice(2));
  }, [router]);

  return (
    <Layout path={path}>
      <Landing />
      <AboutMe />
      <Skills />
      {/* <Projects /> */}
    </Layout>
  );
};

export default Home;
