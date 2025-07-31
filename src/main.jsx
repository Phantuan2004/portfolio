import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// Import library i18next
import "./library/i18next/i18n.js";

// Import Font Awesome CSS
import "@fortawesome/fontawesome-free/css/all.min.css";
// // Import Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Import Bootstrap JS
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
