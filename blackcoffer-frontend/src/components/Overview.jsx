import React, { useEffect, useState } from "react";
import { Bubble, Doughnut, Line } from "react-chartjs-2";
import axios from "axios";

export const Overview = (prop) => {
  const [intensity, setintensity] = useState();
  const [likelihood, setlikelihood] = useState([]);
  const [relevence, setrelevence] = useState([]);

  const likecolor = [
    ["rgb(255, 64, 105)", "rgba(255, 64, 105,0.5)"],
    ["rgb(34, 207, 207)", "rgba(34, 207, 207,0.5)"],
    ["rgb(255, 194, 52)", "rgba(255, 194, 52,0.5)"],
    ["rgb(5, 155, 255)", "rgba(5, 155, 255,0.5)"],
  ];

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/v1/overview`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log(response.data);
      //   creating intensity array
      let inten = [];
      for (let i = 0; i < response?.data?.data?.intensity.length; i++) {
        let obj = {};
        obj.x = response?.data?.data?.intensity[i]._id;
        obj.y = response?.data?.data?.intensity[i].count;
        obj.r = Math.ceil(Math.random() * 10) + 2;
        inten.push(obj);
      }
      setintensity(inten);

      //   creating likelihood array
      let likeli = [];
      for (let i = 0; i < response?.data?.data?.likelihood.length; i++) {
        let obj = {};
        let arr = [];
        arr.push(response?.data?.data?.likelihood[i].count);
        arr.push(962 - response?.data?.data?.likelihood[i].count);
        obj.data = arr;
        obj.backgroundColor = likecolor[i];
        likeli.push(obj);
      }
      setlikelihood(likeli);

      //   creating intensity array
      let rele = [];
      for (let i = 0; i < response?.data?.data?.relevance.length; i++) {
        let obj = {};
        obj.x = response?.data?.data?.relevance[i]._id;
        obj.y = response?.data?.data?.relevance[i].count;
        rele.push(obj);
      }
      setrelevence(rele);
    } catch (error) {
      console.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    prop.settopbarcontent("Main Dashboard");
    fetchData();
  }, []);
  return (
    <>
      <div className="flex mt-14 h-[70vh]">
        <div className="w-[60%] flex flex-col justify-between items-center">
          <Bubble
            datasetIdKey="id"
            data={{
              datasets: [
                {
                  label: "intensity with no. of records",
                  data: intensity,
                  backgroundColor: [
                    "rgba(255, 64, 105,0.8)",
                    "rgb(34, 207, 207)",
                    "rgb(255, 194, 52)",
                    "rgb(255, 144, 32)",
                    "rgb(5, 155, 255)",
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
          <p className="font-semibold text-xs text-gray-500">Intensity -&gt;</p>
          <p className="font-semibold mt-4 cursor-pointer">
            Intensity along with no. of records
          </p>
        </div>
        <div className="w-[40%] px-20 flex justify-between flex-col items-center">
          <Doughnut
            data={{
              labels: [],
              datasets: likelihood,
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
          <div className="text-xs">
            <div className="flex justify-center items-center">
              <div className="mr-2 bg-[rgb(255,64,105)] w-6 h-3 border-2 border-white"></div>
              Likelihood 1
            </div>
            <div className="flex justify-center items-center">
              <div className="mr-2 bg-[rgb(34,207,207)] w-6 h-3 border-2 border-white"></div>
              Likelihood 2
            </div>
            <div className="flex justify-center items-center">
              <div className="mr-2 bg-[rgb(255,194,52)] w-6 h-3 border-2 border-white"></div>
              Likelihood 3
            </div>
            <div className="flex justify-center items-center">
              <div className="mr-2 bg-[rgb(5,155,255)] w-6 h-3 border-2 border-white"></div>
              Likelihood 4
            </div>
          </div>
          <p className="font-semibold cursor-pointer">
            Likelihood along with no. of records
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center">
        <Line
          data={{
            labels: [
              "Relevence 1",
              "Relevence 2",
              "Relevence 3",
              "Relevence 4",
              "Relevence 5",
              "Relevence 6",
              "Relevence 7",
            ],
            datasets: [
              {
                data: relevence,
              },
            ],
          }}
          options={{
            pointRadius: 10,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
        <p className="font-semibold mt-4 cursor-pointer">
          Relevence along with no. of records
        </p>
        <br />
        <br />
      </div>
    </>
  );
};
