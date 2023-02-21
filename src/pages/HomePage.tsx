import { useRef } from "react";
import Home from "../components/Home";
import AppLayout from "../components/layout/AppLayout";

const HomePage = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollToTarget = (name: string) => {
    console.log(name);
    console.log(targetRef.current);
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AppLayout scrollToTarget={scrollToTarget}>
      <Home targetRef={targetRef} />
    </AppLayout>
  );
};

export default HomePage;
