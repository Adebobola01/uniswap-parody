import React, { Suspense, lazy } from 'react';
import { useRoutes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import Hero from './Pages/Hero';
import Swap from "./Pages/Swap";

function App() {
  
  let element = useRoutes([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Hero/>
        },
        {
          path: "swap",
          element: <Swap/>,
        }
      ],
    },
  ]);
  return element;
}

export default App;
