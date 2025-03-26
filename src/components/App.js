import '../styles/App.css';
import '../styles/Global.css'
import Navbar from "./Navbar";
import ButtonHome from "./ButtonHome";
import React from "react";
import Presentation from "./Presentation";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Legals from "../pages/Legals";


function App() {
  return (
      <Router>
          <Routes>
              <Route path={"/"} element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path={"/legals"} element={<Legals />} />
              </Route>
          </Routes>
      </Router>

  );
}

export default App;
