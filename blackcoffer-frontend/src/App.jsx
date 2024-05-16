import "./App.css";
import Chart from "chart.js/auto";
import React, { act, useEffect, useState } from "react";
import { DashLeft } from "./components/DashLeft";
import { DashRight } from "./components/DashRight";
import { useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  const [active, setactive] = useState("dashboard");
  useEffect(() => {
    if (
      window.location.href.endsWith("dashboard") ||
      window.location.href.endsWith("dashboard/")
    )
      setactive("dashboard");
    else if (
      window.location.href.endsWith("country") ||
      window.location.href.endsWith("country/")
    )
      setactive("country");
    else if (
      window.location.href.endsWith("data-table") ||
      window.location.href.endsWith("data-table/")
    )
      setactive("data");
    else if (
      window.location.href.endsWith("profile") ||
      window.location.href.endsWith("profile/")
    )
      setactive("profile");
  }, [location]);

  return (
    <>
      <div className="flex">
        <DashLeft active={active} />
        <DashRight active={active} />
      </div>
    </>
  );
}

export default App;
