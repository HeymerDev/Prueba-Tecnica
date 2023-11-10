import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ViewLogin from "./views/ViewLogin.jsx";
import ViewTable from "./views/ViewTable.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewLogin />,
  },
  {
    path: "/login",
    element: <ViewLogin />,
  },
  {
    path: "/dashboard",
    element: <ViewTable />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
