
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage.jsx';
import SigninStudent from './components/SigninStudent.jsx';
import SigninCompany from './components/SigninCompany.jsx';
import ChooseRole from './components/ChooseRole.jsx';
import LogIn from './components/LogIn.jsx';
import StudentProfile from "./components/StudentProfile";
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
import SearchCompany from './components/SearchCompany.jsx';
import SearchStudent from './components/SearchStudent.jsx';
import SearchResults from './components/SearchResults.jsx';
import SearchResultsStudent from './components/SearchResultsStudent.jsx';

const router = createBrowserRouter([
  { path: "/", element: <LandingPage/>},
  { path: "Landingpage",element: <LandingPage />},
  { path: "SignupStudent", element: <SigninStudent />},
  { path: "SignupCompany", element: <SigninCompany />},
  { path: "Chooserole", element: <ChooseRole />},
  { path: "Searchresults", element: <SearchResults />},
  { path: "Searchresultsstudent", element: <SearchResultsStudent/>},
  { path: "Searchstudent", element: <SearchStudent/>},
  { path: "Searchcompany", element: <SearchCompany/>},
  { path: "Login", element: <LogIn/>},
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
