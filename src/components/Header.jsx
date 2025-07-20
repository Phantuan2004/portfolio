import {useEffect, useState} from "react";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

function Header({aboutRef, skillsRef, projectsRef, contactRef, resumeRef}) {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const navigate = useNavigate();
  const location = useLocation();

  // Khi component mount, lấy trạng thái từ cookie và set state
  useEffect(() => {
    const mode = Cookies.get("mode");
    if (mode === "dark-mode") {
      setIsDark(true);
      document.body.classList.add("dark-mode");
      console.log("Cookie: dark mode");
    }else {
      setIsDark(false);
      document.body.classList.remove("dark-mode");
      console.log("Cookie: light mode");
    }
  }, []);

  // Theo dõi URL changes để update active section
  useEffect(() => {
    let hash = location.hash.replace('#', '');
    if (!hash || hash === '') {
      hash = 'about';
      navigate(`#about`, { replace: true });
    }
    setActiveSection(hash);
  }, [location, navigate]);

  // Component mount - scroll to about section mặc định
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!location.hash && aboutRef?.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        navigate('#about', { replace: true });
        setActiveSection('about');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Khi toggle thay đổi
  const handleChange = (e) => {
    const checked = e.target.checked;
    setIsDark(checked);
    if (checked) {
      document.body.classList.add("dark-mode");
      Cookies.set("mode", "dark-mode", { expires: 7 });
      console.log("change to dark mode");
    } else {
      document.body.classList.remove("dark-mode");
      Cookies.remove("mode");
      console.log("change to light mode");
    }
  };

  // Function scroll và update URL
  const scrollToSection = (ref, hash) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      // Update URL với hash format
      navigate(`#${hash}`, { replace: true });
      setActiveSection(hash);
    }
  };

  // Function kiểm tra section active
  const isActive = (sectionName) => {
    return activeSection === sectionName;
  };

  <style jsx>{`
    .nav-link.active {
      font-weight: bold;
      color: #007bff !important;
      background-color: rgba(0, 123, 255, 0.1);
      border-radius: 5px;
      text-decoration: none;
    }
    
    .nav-link {
      transition: all 0.3s ease;
      padding: 8px 12px;
      margin: 2px 0;
    }
    
    .nav-link:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
    }
  `}</style>

  return (
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0">
          <a className="no-text-decoration" href="#about" onClick={(e) => {e.preventDefault(); scrollToSection(aboutRef, 'about');}}>
            Simon Doe
          </a>
        </h1>

        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
              <img
                className="profile-image mb-3 rounded-circle mx-auto"
                src="assets/images/profile.png"
                alt="image"
              />
              <div className="bio mb-3">
                Hi, my name is Simon Doe and I'm a senior software engineer.
                Welcome to my personal website!
              </div>
              <ul className="social-list list-inline py-2 mx-auto">
                <li className="list-inline-item">
                  <a href="#" aria-label="Twitter">
                    <i className="fa-brands fa-x-twitter fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" aria-label="GitHub">
                    <i className="fa-brands fa-github-alt fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" aria-label="Stack Overflow">
                    <i className="fa-brands fa-stack-overflow fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" aria-label="CodePen">
                    <i className="fa-brands fa-codepen fa-fw"></i>
                  </a>
                </li>
              </ul>
              <hr />
            </div>

            <ul className="navbar-nav flex-column text-start">
              <li className="nav-item">
                <a
                  href="#about"
                  className={`nav-link ${isActive("about") ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(aboutRef, "about");
                  }}
                >
                  <i className="fas fa-user fa-fw me-2"></i>About Me
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${isActive("skills") ? "active" : ""}`} 
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault(); 
                    scrollToSection(skillsRef, 'skills');
                  }}
                >
                  <i className="fas fa-cogs fa-fw me-2"></i>Skills
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${isActive("projects") ? "active" : ""}`} 
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault(); 
                    scrollToSection(projectsRef, 'projects');
                  }}
                >
                  <i className="fas fa-laptop-code fa-fw me-2"></i>Projects
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${isActive("resume") ? "active" : ""}`} 
                  href="#resume"
                  onClick={(e) => {
                    e.preventDefault(); 
                    scrollToSection(resumeRef, 'resume');
                  }}
                >
                  <i className="fas fa-file-alt fa-fw me-2"></i>Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${isActive("contact") ? "active" : ""}`} 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault(); 
                    scrollToSection(contactRef, 'contact');
                  }}
                >
                  <i className="fas fa-envelope-open-text fa-fw me-2"></i>
                  Contact
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-cogs fa-fw me-2"></i>More Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="project.html">
                      Project Page
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-home.html">
                      Blog Home 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-home-alt.html">
                      Blog Home 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog-post.html">
                      Blog Post
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>

            <div className="my-2">
              <a
                className="btn btn-primary"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(contactRef, 'contact');
                }}
              >
                <i className="fas fa-paper-plane me-2"></i>Hire Me
              </a>
            </div>

            <div className="dark-mode-toggle text-center w-100">
              <hr className="mb-4" />
              <h4 className="toggle-name mb-3 ">
                <i className="fas fa-adjust me-1"></i>{isDark ? "Light Mode" : "Dark Mode"}
              </h4>

              <input className="toggle" id="darkmode" type="checkbox" onChange={handleChange} checked={isDark} />
              <label
                className="toggle-btn mx-auto mb-0"
                htmlFor="darkmode"
              ></label>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
