import { useEffect, useRef, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import AboutMe from "../components/AboutMe";
import Experience from "../components/experience/Experience";
import ExperienceMobile from "../components/experience/ExperienceMobile";
import Portfolio from "../components/portfolio/Portfolio";
import PortfolioMobile from "../components/portfolio/PortfolioMobile";
import Skills from "../components/Skills";
import { MOBILE_W, WINDOW_W } from "../styles/theme";

export type TargetType = "" | "aboutme" | "skills" | "experience" | "portfolio";

const HomePage = () => {
  const [target, setTarget] = useState<TargetType>("");
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetRef.current)
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    return () => {
      setTarget(""); // 스크롤 후 동일한 section 재클릭시 이동
    };
  }, [target]);

  const getTarget = (name: TargetType) => setTarget(name);

  return (
    <AppLayout getTarget={getTarget}>
      <div ref={target === "aboutme" ? targetRef : null}>
        <AboutMe />
      </div>
      <div ref={target === "skills" ? targetRef : null}>
        <Skills />
      </div>
      <div ref={target === "experience" ? targetRef : null}>
        {WINDOW_W < MOBILE_W ? <ExperienceMobile /> : <Experience />}
      </div>
      <div ref={target === "portfolio" ? targetRef : null}>
        {WINDOW_W < MOBILE_W ? <PortfolioMobile /> : <Portfolio />}
      </div>
    </AppLayout>
  );
};

export default HomePage;
