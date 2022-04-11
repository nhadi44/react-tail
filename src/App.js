import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as page from "./pages";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<page.Home />} />
        <Route path="/about" element={<page.About />} />
      </Routes>
    </BrowserRouter>
  );
}
