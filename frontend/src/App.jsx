import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import "./styles/index.css";

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/sphere" element={<Home />} />
        <Route path="/story/:slug" element={<ArticlePage />} />
        <Route path="/post/:slug" element={<ArticlePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}


