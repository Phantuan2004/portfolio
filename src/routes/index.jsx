import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import DetailProject from "../pages/DetailProject";
import Experience from "../pages/Experience";
import Project from "../pages/Project";
import Resume from "../pages/Resume";
import MainLayout from "../layouts/MainLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AboutMe />} />
          <Route path="portfolio" element={<Project />} />
          <Route path="detail-portfolio" element={<DetailProject />} />
          <Route path="resume" element={<Resume />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
