import React, {useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  });

  return <Router><MainLayout /></Router>;
}

export default App;
