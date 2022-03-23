import Landing from '../components/Landing/Landing';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Landing />
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
