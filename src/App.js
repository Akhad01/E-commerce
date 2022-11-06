import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/Home";

import "../src/fonts/Gilroy-Regular.ttf";
// import { Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Sidebar />
        <Home />
        {/* <Routes> */}
        {/* <Home /> */}
        {/* <Router path="/" element={<Home />} /> */}
        {/* <Router path="" element={<Home />} />
          <Router path="" element={<Home />} />
          <Router path="" element={<Home />} />
          <Router path="" element={<Home />} /> */}
        {/* </Routes> */}
      </div>
    </div>
  );
}

export default App;
