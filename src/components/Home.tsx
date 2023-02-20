import styled from "styled-components";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const Home = () => {
  return (
    <StHome>
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
    </StHome>
  );
};

export default Home;

const StHome = styled.div``;
