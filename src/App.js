import './App.css';
import React from "react";
import Acceuil from "./Page/Acceuil";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import ServicePage from "./Page/ServicePage";
import ContactPage from "./Page/ContactPage";

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path="/" element={<Acceuil/>} />
                  <Route path="/service" element={<ServicePage/>} />
                  <Route path="/contact" element={<ContactPage/>} />
              </Routes>
          </Router>
      </>
  );
}

export default App;
