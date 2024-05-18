import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/DataTileList.css";
import DataTile from "./DataTile.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

const countryArray = [
  "All",
  "Algeria",
  "Angola",
  "Argentina",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Belize",
  "Brazil",
  "Burkina Faso",
  "Canada",
  "China",
  "Colombia",
  "Cyprus",
  "Denmark",
  "Egypt",
  "Estonia",
  "Ethiopia",
  "Gabon",
  "Germany",
  "Ghana",
  "Greece",
  "Hungary",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Lebanon",
  "Liberia",
  "Libya",
  "Malaysia",
  "Mali",
  "Mexico",
  "Morocco",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Poland",
  "Qatar",
  "Russia",
  "Saudi Arabia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Syria",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Venezuela",
];

const regionArray = [
  "All",
  "Africa",
  "Asia",
  "Central Africa",
  "Central America",
  "Central Asia",
  "Eastern Africa",
  "Eastern Asia",
  "Eastern Europe",
  "Europe",
  "Northern Africa",
  "Northern America",
  "Northern Europe",
  "Oceania",
  "South America",
  "South-Eastern Asia",
  "Southern Africa",
  "Southern Asia",
  "Southern Europe",
  "Western Africa",
  "Western Asia",
  "Western Europe",
  "World",
];

const pestleArray = [
  "All",
  "Social",
  "Lifestyles",
  "Healthcare",
  "Environmental",
  "Industries",
  "Economic",
  "Political",
  "Technological",
  "Organization",
];

const sectorArray = [
  "All",
  "Energy",
  "Security",
  "Healthcare",
  "Media & entertainment",
  "Food & agriculture",
  "Government",
  "Manufacturing",
  "Construction",
  "Transport",
  "Aerospace & defence",
  "Information Technology",
  "Financial services",
  "Support services",
  "Retail",
  "Water",
  "Environment",
  "Automotive",
  "Tourism & hospitality",
];

const endYearArray = [
  "All",
  2016,
  2017,
  2018,
  2019,
  2020,
  2021,
  2022,
  2024,
  2025,
  2026,
  2027,
  2028,
  2030,
  2034,
  2035,
  2036,
  2040,
  2041,
  2046,
  2050,
  2051,
  2055,
  2060,
  2126,
  2200,
];

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
    <div className="mt-14">
      <div className="flex justify-center">
        <div>
          <p>Search by country</p>
          <select className="w-full">
            {countryArray?.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Search by region</p>
          <select className="w-full">
            {regionArray?.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Search by pestle</p>
          <select className="w-full">
            {pestleArray?.map((pestle, index) => (
              <option key={index} value={pestle}>
                {pestle}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Search by sector</p>
          <select className="w-full">
            {sectorArray?.map((sector, index) => (
              <option key={index} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Search by end year</p>
          <select className="w-full">
            {endYearArray?.map((endyear, index) => (
              <option key={index} value={endyear}>
                {endyear}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="tiles-container mt-4">
        {data ? (
          data?.map((record, index) => <DataTile key={index} record={record} />)
        ) : (
          <p className="font-semibold">No records found...</p>
        )}
      </div>
    </div>
  );
};
