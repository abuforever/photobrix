import React from "react";
// import { useDispatch } from "react-redux";
// import { useStoreState } from "./redux/selector";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route, Routes } from 'react-router-dom';
import Mainpage from "./components/pages/Mainpage";


function App() {
  // const states = useStoreState();
  // const dispatch = useDispatch();


  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/info" element={<Mainpage />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
