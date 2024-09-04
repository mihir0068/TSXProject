import React from "react";
import "./Admin-dashboard.css";
import Header from "../Header/Header";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminDashboard = () => {
  return (
    // <>
    //   <div className="bg-[#f7f7f7] h-screen font-arialCyrillic ">
    //     <Header />
    //     <div className="flex flex-row h-full">
    //       <div className="flex flex-col justify-start w-60 md:w-60 md:h-full border-r-2 border-[#e3e3e3] p-5 h-full">
    //         <div className="mb-4 bg-red-200 bg-opacity-50 p-1.5 rounded-lg cursor-pointer">
    //           <p className="text-red-600 text-left">
    //             <i className="bi bi-house text-red-700 font-bold"></i>{" "}
    //             <span className="pl-2">Dashboard</span>
    //           </p>
    //         </div>
    //       </div>

    //       <div className="flex flex-col w-full p-5 ">
    //         <div className="flex flex-row justify-between">
    //           <div className="bg-white shadow p-4 h-50 w-60  border-white rounded-lg">
    //             <i className="bi bi-download text-blue-600 font-bold bg-blue-300 bg-opacity-35 p-1 rounded"></i>{" "}
    //             Total Downloads
    //             <div className="flex flex-row items-center mt-3 font-bold">
    //               <div className="text-xl">2864</div>
    //               <div className="font-thin ml-2 pl-2 pr-2 rounded-md text-sm text-green-600 bg-green-100 bg-opacity-50 border border-green-600">
    //                 +15.7%
    //               </div>
    //             </div>
    //             <span className="font-thin">
    //               <sub>Monthly</sub>
    //             </span>
    //             <br />
    //           </div>

    //           <div className="bg-white shadow p-4 h-50 w-60  border-white rounded-lg">
    //             <i className="bi bi-people text-green-600 font-bold bg-green-300 bg-opacity-35 p-1 rounded"></i>{" "}
    //             Active Users
    //             <div className="flex flex-row items-center mt-3 font-bold">
    //               <div className="text-xl">35425</div>
    //               <div className="font-thin ml-2 pl-2 pr-2 rounded-md text-sm text-red-600 bg-red-100 bg-opacity-50 border border-red-600">
    //                 -7.6%
    //               </div>
    //             </div>
    //             <span className="font-thin">
    //               <sub>Monthly</sub>
    //             </span>
    //             <br />
    //           </div>

    //           <div className="bg-white shadow p-4 h-50 w-60  border-white rounded-lg">
    //             <i className="bi bi-activity text-red-600 font-bold bg-red-300 bg-opacity-35 p-1 rounded"></i>{" "}
    //             Total Gyms
    //             <div className="flex flex-row items-center mt-3 font-bold">
    //               <div className="text-xl">2864</div>
    //               <div className="font-thin ml-2 pl-2 pr-2 rounded-md text-sm text-green-600">
    //                 +15.7%
    //               </div>
    //             </div>
    //             <span className="font-thin">
    //               <sub>Monthly</sub>
    //             </span>
    //             <br />
    //           </div>
    //           <div className="bg-white shadow p-4 h-50 w-60  border-white rounded-lg">
    //             <i className="bi bi-person-bounding-box text-green-600 font-bold bg-green-300 bg-opacity-35 p-1 rounded"></i>{" "}
    //             Sign-ups
    //             <div className="flex flex-row items-center mt-3 font-bold">
    //               <div className="text-xl">2864</div>
    //               <div className="font-thin ml-2 pl-2 pr-2 rounded-md text-sm text-red-600">
    //                 +15.7%
    //               </div>
    //             </div>
    //             <span className="font-thin">
    //               <sub>Weekly</sub>
    //             </span>
    //             <br />
    //           </div>
    //         </div>

    //         <div className="flex flex-row pt-8 justify-around">
    //           <div className="flex felx-row justify-between bg-white shadow p-6 h-[430px] rounded-lg w-1/3 ">
    //             <div>Revenue</div>
    //             <div className="">
    //               <select
    //                 name=""
    //                 id=""
    //                 className="bg-gray-200 text-gray-600 border border-gray-700 rounded p-1 pl-2 pr-2"
    //               >
    //                 <option value="">Monthly</option>
    //                 <option value="">Weekly</option>
    //                 <option value="">Yearly</option>
    //               </select>
    //             </div>
    //           </div>
    //           <div className="bg-white shadow p-4 h-full w-1/3">
    //             <i className="bi bi-cash-stack text-green-600"></i> Revenue:
    //             $3,200
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="bg-[#f7f7f7] h-screen font-arialCyrillic">
        <Header />
        <div className="flex flex-col lg:flex-row h-full">
          <div className="flex flex-col justify-start w-full lg:w-60 border-r-2 border-[#e3e3e3] p-5 lg:h-full lg:flex-shrink-0">
            <div className="mb-4 bg-red-200 bg-opacity-50 p-1.5 rounded-lg cursor-pointer">
              <p className="text-red-600 text-left">
                <i className="bi bi-house text-red-700 font-bold"></i>{" "}
                <span className="pl-2">Dashboard</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full p-5 lg:flex-grow">
            <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4">
              <div className="bg-white shadow p-4 h-50 w-full lg:w-60 mb-4 lg:mb-0 border-white rounded-lg">
                <i className="bi bi-download text-blue-600 font-bold bg-blue-300 bg-opacity-35 p-1 rounded"></i>{" "}
                Total Downloads
                <div className="flex flex-row items-center mt-3 font-bold">
                  <div className="text-xl">2864</div>
                  <div className="font-thin ml-2 pl-2 pr-2 rounded-md text-sm text-green-600 bg-green-100 bg-opacity-50 border border-green-600">
                    +15.7%
                  </div>
                </div>
                <span className="font-thin">
                  <sub>Monthly</sub>
                </span>
                <br />
              </div>

              <div className="bg-white shadow p-4 h-50 w-full lg:w-60 mb-4 lg:mb-0 border-white rounded-lg">
                <i className="bi bi-people text-green-600 font-bold bg-green-300 bg-opacity-35 p-1 rounded"></i>{" "}
                Active Users
                <div className="flex flex-row items-center mt-3 font-bold">
                  <div className="text-xl">35425</div>
                  <div className="font-thin ml-2 pl-2 pr-2 rounded-md text-sm text-red-600 bg-red-100 bg-opacity-50 border border-red-600">
                    -7.6%
                  </div>
                </div>
                <span className="font-thin">
                  <sub>Monthly</sub>
                </span>
                <br />
              </div>

              <div className="bg-white shadow p-4 h-50 w-full lg:w-60 mb-4 lg:mb-0 border-white rounded-lg">
                <i className="bi bi-activity text-red-600 font-bold bg-red-300 bg-opacity-35 p-1 rounded"></i>{" "}
                Total Gyms
                <div className="flex flex-row items-center mt-3 font-bold">
                  <div className="text-xl">2864</div>
                  <div className="font-thin ml-2 pl-2 pr-2 rounded-md text-sm text-green-600">
                    +15.7%
                  </div>
                </div>
                <span className="font-thin">
                  <sub>Monthly</sub>
                </span>
                <br />
              </div>

              <div className="bg-white shadow p-4 h-50 w-full lg:w-60 mb-4 lg:mb-0 border-white rounded-lg">
                <i className="bi bi-person-bounding-box text-green-600 font-bold bg-green-300 bg-opacity-35 p-1 rounded"></i>{" "}
                Sign-ups
                <div className="flex flex-row items-center mt-3 font-bold">
                  <div className="text-xl">2864</div>
                  <div className="font-thin ml-2 pl-2 pr-2 rounded-md text-sm text-red-600">
                    +15.7%
                  </div>
                </div>
                <span className="font-thin">
                  <sub>Weekly</sub>
                </span>
                <br />
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap pt-8 space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex flex-col bg-white shadow p-6 h-[430px] rounded-lg w-full lg:w-1/3">
                <div className="flex items-center justify-between mb-4">
                  <div>Revenue</div>
                  <select
                    name=""
                    id=""
                    className="bg-gray-200 text-gray-600 border border-gray-700 rounded p-1 pl-2 pr-2"
                  >
                    <option value="">Monthly</option>
                    <option value="">Weekly</option>
                    <option value="">Yearly</option>
                  </select>
                </div>
                {/* Content for Revenue */}
              </div>

              <div className="bg-white shadow p-4 h-full w-full lg:w-1/3">
                <i className="bi bi-cash-stack text-green-600"></i> Revenue: $3,200
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
