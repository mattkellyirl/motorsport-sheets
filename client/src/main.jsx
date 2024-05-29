// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import DashboardMain from "./components/pages/Dashboard/DashboardMain";
import DashboardCars from "./components/pages/Dashboard/DashboardCars";

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
            path: "cars",
            element: <DashboardCars />,
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
