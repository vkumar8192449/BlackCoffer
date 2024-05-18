import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Overview } from "./Overview";
import { Country } from "./Country";
import { DataTable } from "./DataTable";
import { TopBar } from "./TopBar";

export const DashRight = () => {
  const [topbarcontent, settopbarcontent] = useState();
  return (
    <div className="w-full min-h-[100vh] bg-[#eef1fa] px-6">
      <TopBar topbarcontent={topbarcontent} />
      <Routes>
        <Route>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route
            path="/dashboard"
            element={<Overview settopbarcontent={settopbarcontent} />}
          />
          <Route
            path="/country"
            element={<Country settopbarcontent={settopbarcontent} />}
          />
          <Route
            path="/data-table"
            element={<DataTable settopbarcontent={settopbarcontent} />}
          />
          <Route path="/profile" element={<>Profile section</>} />
        </Route>
      </Routes>
    </div>
  );
};
