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


const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "Landingpage",
    element: <LandingPage />,
     },
     { path: "SignupStudent",
      element: <SigninStudent />,
       },
       
       { path: "SignupCompany",
        element: <SigninCompany />,
         },

         { path: "Chooserole",
          element: <ChooseRole />,
           },

           { path: "Login",
            element: <LogIn/>,
             },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <RouterProvider router={router} />

  </React.StrictMode>
);
