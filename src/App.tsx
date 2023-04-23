import React, { Suspense, lazy } from 'react';
import { useRoutes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';

function App() {
  
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [],
    },
  ]);
  return element;
}

export default App;
