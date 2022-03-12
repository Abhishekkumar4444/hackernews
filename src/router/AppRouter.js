import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import PageNotFound from "../components/PageNotFound";
import HomePage from "../components/HomePage";
import ShowStories from "../components/ShowStories";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/:type" element={<ShowStories />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
