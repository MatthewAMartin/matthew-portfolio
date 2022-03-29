import Landing from '../components/Landing/Landing';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Landing />
      <AboutMe />
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
