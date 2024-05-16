import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Overview } from "./Overview";
import { Country } from "./Country";
import { DataTable } from "./DataTable";

export const DashRight = () => {
  return (
    <div className="border-2 w-full min-h-[100vh]">
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
