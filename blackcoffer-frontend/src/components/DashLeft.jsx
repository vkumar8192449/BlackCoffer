import React from "react";
import { Link } from "react-router-dom";

export const DashLeft = (prop) => {
  return (
    <div className="border-2 w-[24%] min-h-[100vh] flex flex-col items-center px-2">
      <span className="text-3xl font-bold text-[#1b254b] mt-12 mb-8">
        BLACK
        <span className="text-3xl font-semibold text-[#1b254b]">COFFER</span>
      </span>
      <div className="border-b-2 border-b-[#dbdceb] w-full"></div>
      <br />
      <div id="menu-content" className="w-full px-4">
        <Link to="/dashboard">
          <div
            className={`flex font-semibold p-2 ${
              prop.active === "dashboard"
                ? "text-[#2d3748] border-r-4 border-r-[#5e3aff]"
                : "text-[#8f9bba]"
            }`}
          >
            <div className="mr-4">
              <svg
                className={`w-6 h-6 text-[#5e3aff] ${
                  prop.active === "dashboard"
                    ? "text-[#5e3aff]"
                    : "text-[#8f9bba]"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            Main Dashboard
          </div>
        </Link>
        <Link to="/country">
          <div
            className={`flex font-semibold p-2 ${
              prop.active === "country"
                ? "text-[#2d3748] border-r-4 border-r-[#5e3aff]"
                : "text-[#8f9bba]"
            }`}
          >
            <div className="mr-4">
              <svg
                className={`w-6 h-6 text-[#5e3aff] ${
                  prop.active === "country"
                    ? "text-[#5e3aff]"
                    : "text-[#8f9bba]"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            Country
          </div>
        </Link>
        <Link to="data-table">
          <div
            className={`flex font-semibold p-2 ${
              prop.active === "data"
                ? "text-[#2d3748] border-r-4 border-r-[#5e3aff]"
                : "text-[#8f9bba]"
            }`}
          >
            <div className="mr-4">
              <svg
                className={`w-6 h-6 text-[#5e3aff] ${
                  prop.active === "data" ? "text-[#5e3aff]" : "text-[#8f9bba]"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h10"
                />
              </svg>
            </div>
            Data Tables
          </div>
        </Link>
        <Link to="/profile">
          <div
            className={`flex font-semibold p-2 ${
              prop.active === "profile"
                ? "text-[#2d3748] border-r-4 border-r-[#5e3aff]"
                : "text-[#8f9bba]"
            }`}
          >
            <div className="mr-4">
              <svg
                className={`w-6 h-6 text-[#5e3aff] ${
                  prop.active === "profile"
                    ? "text-[#5e3aff]"
                    : "text-[#8f9bba]"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
};
