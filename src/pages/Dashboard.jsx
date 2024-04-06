import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

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
              <div className="grid grid-cols-12 gap-6">
                   
                       {/* <DashboardCard01></DashboardCard01> */}
                       {/* <DashboardCard01></DashboardCard01> */}
                       {/* <DashboardCard01></DashboardCard01> */}

              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
