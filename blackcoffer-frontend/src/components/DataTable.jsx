import React, { useEffect } from "react";

export const DataTable = (prop) => {
  useEffect(() => {
    prop.settopbarcontent("All Records");
  }, []);
  return <div>DataTable</div>;
};
