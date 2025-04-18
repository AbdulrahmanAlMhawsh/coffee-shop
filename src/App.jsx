// Root application component that defines the main routing and layout
// File: App.jsx



import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";

import Shipping from "./context/Shipping";
import PrivatePolicy from "./context/PrivatePolicy";
import Terms from "./context/Terms";
import Return from "./context/Return";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/privacy-policy" element={<PrivatePolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/return" element={<Return />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
