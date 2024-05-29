import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "./DashboardNav";

function Dashboard() {
  return (
    <div>
      <DashboardNav />
      <Outlet />
    </div>
  );
}

export default Dashboard;
