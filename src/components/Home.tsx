import { useRef } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

interface IHome {
  targetRef: React.RefObject<HTMLDivElement>;
  // scrollToTarget: (name: string) => void;
}
const Home = ({ targetRef }: IHome) => {
  // const targetRef = useRef<HTMLDivElement>(null);
  // const scrollToTarget = () => {
  //   console.log(targetRef.current);
  //   targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  return (
    <StHome>
      {/* <AboutMe scrollToTarget={scrollToTarget} ref={targetRef} /> */}
      <AboutMe ref={targetRef} />
      <Skills />
      <Experience />
      <Portfolio />
    </StHome>
  );
};

export default Home;

const StHome = styled.div``;
