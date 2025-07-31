import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./components/NotFound";
import { ScaleLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";
import "../public/assets/css/theme-1.css";
import "../src/styles/loading.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="loader-container" style={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          height: "100vh", 
          backgroundColor: "rgba(17, 24, 34, 0.6)",
          color: "#ffffff" 
        }}>
          <ScaleLoader
            loading={loading}
            size={150}
            color="#ffffff"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <div className="loading-text" style={{ 
            marginTop: "30px", 
            marginLeft: "25px",
            fontSize: "2rem", 
            color: "#ffffff", 
            fontWeight: "700", 
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
          }}>
            Đang tải
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span>
          </div>
        </div>
      )}

      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;