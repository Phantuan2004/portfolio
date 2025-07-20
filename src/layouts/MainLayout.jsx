import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutMe from "../pages/AboutMe";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const resumeRef = useRef(null);

  return (
    <div>
      <Header 
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        resumeRef={resumeRef}
      />
      <main>
        <div className="main-wrapper">
          <AboutMe aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} resumeRef={resumeRef} />
          <ScrollToTop />
           <Footer />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
