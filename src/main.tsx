import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import React from "react";

import './index.css'
import App from './App.tsx'
import AppRoutes from "./routes"; // Import the routes

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes /> 
    {/* <App /> */}
  </StrictMode>,
)

