import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import StudentProfile from "./components/StudentProfile";
import './index.css';
import StudentProjects from "./components/StudentProjects";
import StudentVirtualExp from "./components/StudentVirtualExp";
import StudentRating from "./components/StudentRating";
import StudentServiceExchanging from "./components/StudentServiceExchanging";
import IndicatorsContextProvider from "./contexts/indicatorContext";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/student/:id",
    element: <StudentProfile />,
    children: [
      { index: true, element: <StudentProjects /> }, // Default child
      { path: "projects", element: <StudentProjects /> },
      { path: "virtualexperience", element: <StudentVirtualExp /> },
      { path: "rating", element: <StudentRating /> },
      { path: "serviceexchange", element: <StudentServiceExchanging /> }, 
    ],
     },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IndicatorsContextProvider>
      <RouterProvider router={router} />
    </IndicatorsContextProvider>
  </React.StrictMode>
);
