import Landing from '../components/Landing/Landing';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';

const Home = () => {
  
  return (
    <Layout>
      <Landing />
      <AboutMe />
      <Skills />
      <Projects />
      <Timeline />
    </Layout>
  );
};

export default Home;
