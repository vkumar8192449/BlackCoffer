import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Overview } from "./Overview";
import { Country } from "./Country";
import { DataTable } from "./DataTable";
import { TopBar } from "./TopBar";

export const DashRight = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#eef1fa] px-6">
      <TopBar />
      <Routes>
        <Route>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/country" element={<Country />} />
          <Route path="/data-table" element={<DataTable />} />
          <Route path="/profile" element={<>Profile section</>} />
        </Route>
      </Routes>
    </div>
  );
};
