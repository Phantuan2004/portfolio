import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import {useTranslation} from "react-i18next";

function Header({aboutRef, skillsRef, projectsRef, contactRef, resumeRef}) {
  // Navbar data 
   const navbar = [
    { name: 'about', label: 'About Me', link: '#about', ref: aboutRef, icon: 'fas fa-user fa-fw me-2' },
    { name: 'skills', label: 'Skills', link: '#skills', ref: skillsRef, icon: 'fas fa-cogs fa-fw me-2' },
    { name: 'projects', label: 'Projects', link: '#projects', ref: projectsRef, icon: 'fas fa-laptop-code fa-fw me-2' },
    { name: 'resume', label: 'Resume', link: '#resume', ref: resumeRef, icon: 'fas fa-file-alt fa-fw me-2' },
    { name: 'contact', label: 'Contact', link: '#contact', ref: contactRef, icon: 'fas fa-envelope-open-text fa-fw me-2' },
  ];

  // Icon Data
  const socials = [
    { label: 'github', link: 'https://github.com/Phantuan2004', icon: 'fab fa-github' },
    { label: 'facebook', link: 'https://www.facebook.com/phantuan204', icon: 'fab fa-facebook' },
    { label: 'linkedin', link: 'https://www.linkedin.com/in/tu%E1%BA%A5n-phan-56988533b/', icon: 'fab fa-linkedin' },
    { label: 'telegram', link: 'https://t.me/phantuan204', icon: 'fa-brands fa-telegram' },
    { label: 'instagram', link: '#', icon: 'fab fa-instagram' },
  ]

   // Language options - chỉ Việt và Anh
  const flagOptions = [
    {
      value: 'vi',
      label: 'VN',
      fullLabel: 'Tiếng Việt',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png',
    },
    {
      value: 'en',
      label: 'EN',
      fullLabel: 'English',
      icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png',
    },
  ];

  const { i18n, t} = useTranslation();

  // State
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Language functions
  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLangDropdownOpen(false);
  };

  const getCurrentLanguage = () => {
    return flagOptions.find(opt => opt.value === i18n.language) || flagOptions[0];
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  // Khi thay đổi trang
  const updateSection = (name) => {
    setActiveSection(name);
    navigate(`#${name}`, { replace: true });
  };

  // Khi click vào menu
  const handleMenuClick = (ref, name) => (e) => {
    e.preventDefault();
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      updateSection(name);
    }
  };

  // Khi toggle thay đổi mode
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

    // Scroll mặc định nếu không có hash
    const timer = setTimeout(() => {
      if (!location.hash && aboutRef?.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        navigate('#about', { replace: true });
        setActiveSection('about');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.compact-lang-dropdown')) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Khi URL thay đổi
  useEffect(() => {
    let hash = location.hash.replace('#', '');
    if (!hash || hash === '') {
      hash = 'about';
      navigate(`#about`, { replace: true });
    }
    setActiveSection(hash);
  }, [location, navigate]);

   // Function scroll spy
  useEffect(() => {
    const sections = [
    { ref: aboutRef, name: 'about' },
    { ref: skillsRef, name: 'skills' },
    { ref: projectsRef, name: 'projects' },
    { ref: resumeRef, name: 'resume' },
    { ref: contactRef, name: 'contact' },
  ];

  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.6, // 60% section visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const matched = sections.find(s => s.ref.current === entry.target);
        if (matched) {
          setActiveSection(matched.name);
          navigate(`#${matched.name}`, { replace: true });
        }
      }
    });
  }, observerOptions);

  sections.forEach(({ ref }) => {
    if (ref?.current) {
      observer.observe(ref.current);
    }
  });

  return () => {
    sections.forEach(({ ref }) => {
      if (ref?.current) {
        observer.unobserve(ref.current);
      }
    });
  };
  }, [aboutRef, skillsRef, projectsRef, contactRef, resumeRef, navigate]);

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
                {socials.map((social, index) => (
                  <li key={index} className="list-inline-item">
                    <a href={social.link} aria-label={social.label}>
                      <i className={social.icon}></i>
                    </a>
                </li>
                ))}
              </ul>
              
              {/* Compact Language Dropdown */}
              <div className="compact-lang-dropdown">
                <button 
                  className="compact-dropdown-btn" 
                  onClick={toggleLangDropdown}
                  type="button"
                >
                  <img 
                    src={getCurrentLanguage().icon} 
                    alt="flag" 
                    className="language-flag" 
                  />
                  <span className="lang-text">{getCurrentLanguage().label}</span>
                  <span className={`dropdown-arrow ${isLangDropdownOpen ? 'open' : ''}`}>▾</span>
                </button>
                
                {isLangDropdownOpen && (
                  <div className="compact-dropdown-content">
                    {flagOptions.map((option) => (
                      <div
                        key={option.value}
                        className="compact-dropdown-item"
                        onClick={() => changeLanguage(option.value)}
                      >
                        <img 
                          src={option.icon} 
                          alt="flag" 
                          className="language-flag" 
                        />
                        <span className="lang-text">{option.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <hr />
            </div>

            <ul className="navbar-nav flex-column text-start">
              {navbar.map((nav, index) => (
                <li key={index} className="nav-item">
                  <a
                    href={nav.link}
                    className={`nav-link ${activeSection === nav.name ? "active" : ""}`}
                    onClick={handleMenuClick(nav.ref, nav.name)}
                  >
                    <i className={nav.icon}></i>{t(`${nav.name}`)}
                  </a>
                </li>
              ))}
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