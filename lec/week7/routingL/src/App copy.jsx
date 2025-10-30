import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
    <div style={{backgroundColor:"black", color:"whitesmoke"}}>
      this is topbar
      it will be at top at every route
    </div>
    <div>
      <button onClick={() => {
        // if we are doing client side rendering
        // this is not good way, every bundle(html,css,js) comes again when we click the button
        // window.location.href ="/"
      }}>Land</button>
      <button onClick={() => {
        // window.location.href ="/dashboard" 
      }}>Dash</button>
    </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
