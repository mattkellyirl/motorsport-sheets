import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardMain from "./components/Dashboard/DashboardMain";
import DashboardSheets from "./components/Dashboard/DashboardSheets";
import DashboardEvents from "./components/Dashboard/DashboardEvents";
import DashboardCars from "./components/Dashboard/DashboardCars";
import DashboardDrivers from "./components/Dashboard/DashboardDrivers";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <DashboardMain />,
          },
          {
            path: "sheets",
            element: <DashboardSheets />,
          },
          {
            path: "events",
            element: <DashboardEvents />,
          },
          {
            path: "cars",
            element: <DashboardCars />,
          },
          {
            path: "drivers",
            element: <DashboardDrivers />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
