import "./Admin-dashboard.css";
import Header from "../Header/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cards from "./DashboardCards/Cards";
import Tabs from "../UI/Tabs/Tabs";
const AdminDashboard = () => {
  return (
    <>
      <Header />

      <div className="bg-pageBG h-screen flex flex-col">
        <div className="flex flex-col lg:flex-row flex-1 ">
          <div className="flex flex-col justify-start w-[246px] h-[698px] leading-[25px] p-6 border-r-2 border-gray-400 border-dashed lg:relative">
            <Tabs
              label="Dashboard"
              className="text-pageRed bg-pageRedShade"
              iconClass="bi bi-house"
            />
            <Tabs label="User Management" iconClass="bi bi-house" />
            <Tabs label="GYM Management" iconClass="bi bi-house" />
            <Tabs label="Reports & Analytics" iconClass="bi bi-house" />
            <Tabs label="User Feedback" iconClass="bi bi-house" />
          </div>

          <div className="flex flex-col w-full p-5 lg:flex-grow">
            <div className="flex justify-between flex-wrap w-full lg:flex-nowrap lg:space-x-4 mb-4 space-y-4 lg:space-y-0">
              <Cards
                iconClass="bi bi-download text-blue-600 bg-blue-300"
                className="border border-pageGreen"
                title="Total Downloads"
                value={2864}
                percentage="+15.7%"
                isPositive={true}
                period="Monthly"
              />
              <Cards
                iconClass="bi bi-people text-green-600 bg-green-300"
                title="Active Users"
                value={35425}
                percentage="-7.6%"
                isPositive={false}
                period="Monthly"
              />

              <Cards
                iconClass="bi bi-activity text-red-600 bg-red-300"
                title="Total Gyms"
                value={2864}
                percentage="+15.7%"
                isPositive={true}
                period="Monthly"
              />

              <Cards
                iconClass="bi bi-person-bounding-box text-green-600 bg-green-300"
                title="Sign-ups"
                value={2864}
                percentage="+15.7%"
                isPositive={true}
                period="Weekly"
              />
            </div>

            <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4 pt-8 space-y-4 lg:space-y-0">
              <div className="flex flex-col bg-white shadow p-6 h-[134px] w-[250px] rounded-[10px] border-[0.5px] border-pageLightGray opacity-100">
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
              </div>

              <div className="bg-white shadow p-4 h-[134px] w-[250px] rounded-[10px] border-[0.5px] border-pageLightGray opacity-100">
                <i className="bi bi-cash-stack text-green-600"></i> Revenue:
                $3,200
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
