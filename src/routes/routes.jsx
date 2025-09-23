// src/routes/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";


import HeatReport from "../pages/HeatReport";
import ShiftReport from "../pages/ShiftReport";

const routes = [
  { path: '/', element: <HeatReport /> },
]

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HeatReport />} />
    <Route path="/heat-report" element={<HeatReport />} />
    <Route path="/shift-report" element={<ShiftReport />} />
  </Routes>
);

export default AppRoutes;
