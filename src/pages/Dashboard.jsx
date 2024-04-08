import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">

        {/* Sidebar */}


        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></Sidebar>

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} ></Header>
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner />

              <div className="grid grid-cols-12 gap-6">

                <DashboardCard01></DashboardCard01>
                <DashboardCard02></DashboardCard02>
                <DashboardCard03></DashboardCard03>
                <DashboardCard04></DashboardCard04>
                <DashboardCard04></DashboardCard04>
                <DashboardCard06></DashboardCard06>
                           {/* Table Cards */}
                  <DashboardCard07></DashboardCard07>
                  <DashboardCard08></DashboardCard08>
                  <DashboardCard09></DashboardCard09>
                  <DashboardCard10></DashboardCard10>

              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
