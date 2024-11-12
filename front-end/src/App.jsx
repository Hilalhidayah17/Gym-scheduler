import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { DayOne } from "./pages/DayOne";
import { SelectedOptionProvider } from "./components/SelectedOptionContext";

export default function App() {
  return (
    <SelectedOptionProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs/1" element={<DayOne />} />
      </Routes>
    </SelectedOptionProvider>
  );
}
