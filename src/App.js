// import logo from './logo.svg';

import "./App.css";
import Aboutus from "./components/Aboutus";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Footer from "./components/more_compments/Footer";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact  path="/" element={<Home />} />
          <Route exact  path="/about" element={<Aboutus />} />
          <Route exact  path="/contact" element={<ContactUs />} />
          <Route exact  path="/contact" element={<ContactUs />} />
        </Routes>
        </div>
        <Footer />
      </Router>
      {/* <Home /> */}
      
    </>
  );
}

export default App;
