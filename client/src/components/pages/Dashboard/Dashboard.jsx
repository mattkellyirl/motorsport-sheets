import React from "react";
import DashboardNav from "./DashboardNav";
import DashboardMain from "./DashboardMain";
import DashboardCars from "./DashboardCars";

function Dashboard() {
  return (
    <div>
      <DashboardNav />
      {/* <DashboardMain /> */}
      <DashboardCars />
    </div>
  );
}

export default Dashboard;
