import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { useEffect, useState } from "react";
import { initGA } from "../utils/googleAnalytics";

const Router = () => {
  const [gaLoading, setGaLoading] = useState(true);

  useEffect(() => {
    initGA();
    setGaLoading(false);
  }, []);

  return (
    <Routes>
      {gaLoading ? <></> : <Route path="/" element={<HomePage />} />}
    </Routes>
  );
};

export default Router;
