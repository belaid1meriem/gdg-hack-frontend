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
import CompanyProfile from "./components/CompanyProfile";
import CompanyJobs from "./components/CompanyJobs";
import CompanyInternships from "./components/CompanyInternships";
import CompanyCompetitions from "./components/CompanyCompetitions";
import CompanyHacks from "./components/CompanyHacks";


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
  { path: "/company/:id",
    element: <CompanyProfile />,
    children: [
      { index: true, element: <CompanyJobs /> }, // Default child
      { path: "jobs", element: <CompanyJobs /> },
      { path: "internships", element: <CompanyInternships /> },
      { path: "competitions", element: <CompanyCompetitions /> },
      { path: "hackathons", element: <CompanyHacks/> }, 
    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IndicatorsContextProvider>
      <RouterProvider router={router} />
    </IndicatorsContextProvider>
  </React.StrictMode>
);
