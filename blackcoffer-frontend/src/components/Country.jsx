import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

const countryCodes = {
  Algeria: "DZ",
  Angola: "AO",
  Argentina: "AR",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Belize: "BZ",
  Brazil: "BR",
  "Burkina Faso": "BF",
  Canada: "CA",
  China: "CN",
  Colombia: "CO",
  Cyprus: "CY",
  Denmark: "DK",
  Egypt: "EG",
  Estonia: "EE",
  Ethiopia: "ET",
  Gabon: "GA",
  Germany: "DE",
  Ghana: "GH",
  Greece: "GR",
  Hungary: "HU",
  India: "IN",
  Indonesia: "ID",
  Iran: "IR",
  Iraq: "IQ",
  Japan: "JP",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kuwait: "KW",
  Lebanon: "LB",
  Liberia: "LR",
  Libya: "LY",
  Malaysia: "MY",
  Mali: "ML",
  Mexico: "MX",
  Morocco: "MA",
  Niger: "NE",
  Nigeria: "NG",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Poland: "PL",
  Qatar: "QA",
  Russia: "RU",
  "Saudi Arabia": "SA",
  "South Africa": "ZA",
  "South Sudan": "SS",
  Spain: "ES",
  Syria: "SY",
  Turkey: "TR",
  Ukraine: "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States of America": "US",
  Venezuela: "VE",
};

export const Country = () => {
  const [country, setcountry] = useState();
  const [region, setregion] = useState();
  const [regionlabel, setregionlabel] = useState();
  const [backgroundColor, setbackgroundColor] = useState();
  const [borderColor, setborderColor] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/country`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response?.data?.data);
      setcountry(response?.data?.data?.countries);

      //region
      let Rlabels = [];
      let regions = [];
      let bkc = [];
      let bdc = [];
      for (let i = 0; i < response?.data?.data?.region.length; i++) {
        Rlabels.push(response?.data?.data?.region[i]._id);
        regions.push(response?.data?.data?.region[i].count);

        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        bkc.push(`rgba(${r},${g},${b},0.2)`);
        bdc.push(`rgb(${r},${g},${b})`);
      }
      setregion(regions);
      setregionlabel(Rlabels);
      setbackgroundColor(bkc);
      setborderColor(bdc);
    } catch (error) {
      console.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-between items-center">
      <div className="mt-14 border border-gray-400 rounded-xl w-[22vw] max-h-[70vh] overflow-y-scroll no-scrollbar bg-white">
        <p className="text-3xl mt-4 ml-6 mb-4">Countries</p>
        <hr />
        <br />
        {country?.map((item, key) => (
          <div
            key={key}
            className="mb-3 cursor-pointer flex items-center rounded-lg w-[20vw]"
          >
            <img
              className="w-9 h-9 rounded-full ml-8"
              src={`https://flagcdn.com/48x36/${countryCodes[
                item._id
              ].toLowerCase()}.png`}
            />
            <div className="ml-4">
              <div className="text-md font-semibold">{item._id}</div>
              <div className="text-xs font-medium">
                Number of records {item.count}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[52vw] flex flex-col items-center">
        <Bar
          data={{
            labels: regionlabel,
            datasets: [
              {
                axis: "y",
                label: "My First Dataset",
                data: region,
                fill: false,
                backgroundColor,
                borderColor,
                borderWidth: 1,
              },
            ],
          }}
          options={{
            indexAxis: "y",
            plugins: {
              legend: {
                position: "right",
                display: false,
              },
              title: {
                display: true,
                text: "Regions along with number of records",
              },
            },
          }}
        />
        <p className="font-semibold text-xs text-gray-500">
          number of records -&gt;
        </p>
      </div>
    </div>
  );
};
