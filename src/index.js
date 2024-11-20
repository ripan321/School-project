import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Class from "./Compones/Hero/Class";
import Computer from "./Compones/Hero/Computer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./Compones/Hero/Hero";
import Login from "./Compones/Login";
import Practical from "./Compones/Hero/Practical";
import Contact from "./Compones/Hero/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/class",
        element: <Class />,
      },
      {
        path: "/computer",
        element: <Computer />,
      },
      {
        path: "/practical",
        element: <Practical />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
