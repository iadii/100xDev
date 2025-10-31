import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Appbar } from "./components/Appbar";
// import Dashboard from "./components/Dashboard";
// Routing  lazy loading for optimising page
const Dashboard  = React.lazy(()  => import("./components/Dashboard"));

function App() {
  return (
    <>
    <div style={{backgroundColor:"black", color:"whitesmoke"}}>
      this is topbar 
      it will be at top at every route
    </div>
    
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
