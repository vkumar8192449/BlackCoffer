import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/DataTileList.css";
import DataTile from "./DataTile.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

export const DataTable = (prop) => {
  const [data, setdata] = useState();
  const [load, setload] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/all-data`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setload(false);
      setdata(response?.data?.data);
    } catch (error) {
      setload(false);
      console.error(error.response?.data?.message);
    }
  };
  useEffect(() => {
    prop.settopbarcontent("All Records");
    fetchData();
  }, []);

  if (load) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {/*  */}
      <div className="tiles-container">
        {data ? (
          data?.map((record, index) => <DataTile key={index} record={record} />)
        ) : (
          <p className="font-semibold">No records found...</p>
        )}
      </div>
    </div>
  );
};
