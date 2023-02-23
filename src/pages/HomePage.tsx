import { useEffect, useRef, useState } from "react";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import AppLayout from "../components/layout/AppLayout";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

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
        <Experience />
      </div>
      <div ref={target === "portfolio" ? targetRef : null}>
        <Portfolio />
      </div>
    </AppLayout>
  );
};

export default HomePage;
