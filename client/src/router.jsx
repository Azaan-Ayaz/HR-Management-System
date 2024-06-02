import React from "react";
import { Route, Routes } from "react-router-dom";
// import home from './pages/home';
import Home from "./pages/home";

const router = () => {
  return;
  <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>;
};

export default router;
