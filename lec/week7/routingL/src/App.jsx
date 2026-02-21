// Suspense API, asynchronous component fetching, asynchronous data fetching
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Landing } from "./components/Landing";
import { Appbar } from "./components/Appbar";
// import Dashboard from "./components/Dashboard";
// Routing  lazy loading for optimising page
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return ( 
    <>
      <div style={{ backgroundColor: "black", color: "whitesmoke" }}>
        this is topbar it will be at top at every route
      </div>
      .
      <BrowserRouter>
        <Appbar />
        <Routes>
          {/* lets suppose <Landing/> component is coming from backend and it is getting either not loading or loading slow */}
          {/* so fallback component under suspense will eb render in our loading... */}
          <Route path="/" element={<Suspense fallback={"loading..."}> <Landing /></Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}> <Dashboard/></Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
