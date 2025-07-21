import skills from "../data/skills";
import projects from "../data/project";
import education from "../data/education";
import experience from "../data/experience";
import "../styles/timeline.css";
import { Typewriter } from "react-simple-typewriter";

function AboutMe({ aboutRef, skillsRef, projectsRef, contactRef, resumeRef }) {
  // Icon Data
  const socialLink = [
    { label: 'github', link: 'https://github.com/Phantuan2004', icon: 'fab fa-github' },
    { label: 'facebook', link: 'https://www.facebook.com/phantuan204', icon: 'fab fa-facebook' },
    { label: 'linkedin', link: 'https://www.linkedin.com/in/tu%E1%BA%A5n-phan-56988533b/', icon: 'fab fa-linkedin' },
    { label: 'telegram', link: 'https://t.me/phantuan204', icon: 'fa-brands fa-telegram' },
    { label: 'instagram', link: '#', icon: 'fab fa-instagram' },
    { label: 'x', link: '#', icon: 'fa-brands fa-x-twitter' },
  ]

  return (
    <>
      {/* About Me Section */}
      <section id="about" ref={aboutRef} className="about-me-section p-3 p-lg-5 theme-bg-light">
        <div className="container">
          <div className="profile-teaser row">
            <div data-aos="fade-up" data-aos-delay="0" className="col">
              <h2 className="name font-weight-bold mb-1">Simon Doe</h2>
              <div className="tagline mb-3">
                <Typewriter words={["Frontend Developer", "Backend Developer", "Fullstack Developer"]} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                </div>
              <div className="bio mb-4">
                I'm a software engineer specialised in frontend and backend
                development for complex scalable web apps. I write about
                software development on{" "}
                <a className="text-link" to="/blog">
                  my blog
                </a>
                . Want to know how I may help your project? Check out my project{" "}
                <a className="text-link" to="/portfolio">
                  portfolio
                </a>{" "}
                and{" "}
                <a className="text-link" to="/resume">
                  online resume
                </a>
                .
              </div>
              <div className="mb-4">
                <a className="btn btn-primary me-2 mb-3" href="#">
                  <i className="fas fa-arrow-alt-circle-right me-2"></i>
                  <span className="d-none d-md-inline">View</span> Portfolio
                </a>
                <a className="btn btn-secondary mb-3" href="#resume" onClick={(e) => {e.preventDefault(); resumeRef.current.scrollIntoView({ behavior: "smooth" });}}>
                  <i className="fas fa-file-alt me-2"></i>
                  <span className="d-none d-md-inline">View</span> Profile
                </a>
              </div>
            </div>

            <div className="col-md-5 col-lg-5">
              <img
                className="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
                src="assets/images/profile-lg.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Proficiency */}
      <section data-aos="fade-up" data-aos-delay="500" id="skills" ref={skillsRef} className="overview-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-3">What I do</h2>
          <div className="section-intro mb-5">
            I have more than 10 years' experience building software for clients
            all over the world. Below is a quick overview of my main technical
            skill sets and technologies I use. Want to find out more about my
            experience? Check out my{" "}
            <a className="text-link" href="resume.html">
              online resume
            </a>{" "}
            and{" "}
            <a className="text-link" href="portfolio.html">
              project portfolio
            </a>
            .
          </div>
          <div className="row">
            
              {skills.map((skill, index) => (
                <div key={index} className="item col-6 col-lg-3">
                  <div className="item-inner">
                    <div className="item-icon">
                      {Array.isArray(skill.icon) ? (
                        skill.icon.map((iconClass, iconIndex) => (
                          <i key={iconIndex} className={iconClass}></i>
                        ))
                      ) : (
                        <i className={skill.icon}></i>
                      )}
                    </div>
                    <h3 className="item-title" dangerouslySetInnerHTML={{__html: skill.title}}></h3>
                    <div className="item-desc">{skill.desc}</div>
                  </div>
                </div>
              ))}
            
          </div>
          <div className="text-center py-3">
            <a href="services.html" className="btn btn-primary">
              <i className="fas fa-arrow-alt-circle-right me-2"></i>Services
              & Pricing
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        <hr />
      </div>

      {/* Projects Section */}
      <section data-aos="fade-up" id="projects" ref={projectsRef} className="featured-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">
            Featured Projects
          </h2>
          <div className="row">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6 mb-5">
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-12 col-xl-5 card-img-holder">
                    <img
                      src={project.img}
                      className="card-img"
                      alt="image"
                    />
                  </div>
                  <div className="col-12 col-xl-7">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href={project.link} className="theme-link">
                          {project.title}
                        </a>
                      </h5>
                      <p className="card-text">
                        {project.desc}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: {project.client}</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a className="link-mask-link" href={project.link}></a>
                  <div className="link-mask-text">
                    <a className="btn btn-secondary" href={project.link}>
                      <i className="fas fa-eye me-2"></i>View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="text-center py-3">
            <a href="portfolio.html" className="btn btn-primary">
              <i className="fas fa-arrow-alt-circle-right me-2"></i>View
              Portfolio
            </a>
          </div>
        </div>
      </section>
      
      <div className="container">
        <hr />
      </div>

      {/* Resume Section */}
      <section data-aos="fade-up" id="resume" ref={resumeRef} className="resume-section p-3 p-lg-5">
        <div className="container">
          <h2 className="resume-title">Resume</h2>
          
          <div className="row">
            {/* Education Column */}
            <div className="col-lg-6 mb-5">
              <h3 className="resume-section-heading">
                <i className="fas fa-graduation-cap me-2"></i>
                Education
              </h3>
              <div className="resume-column resume-left">
                {education.map((edu, index) => (
                  <div key={index} className="resume-item">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.year}</h5>
                    <p><em>{edu.school}</em></p>
                    <p>{edu.desc}</p>
                    <ul>
                      {Array.isArray(edu.descDetail) ? (
                        edu.descDetail.map((detail, detailIndex) => (
                          <li key={detailIndex}>{detail}</li>
                        ))
                      ) : (
                        <p>{edu.descDetail}</p>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience Column */}
            <div className="col-lg-6 mb-5">
              <h3 className="resume-section-heading">
                <i className="fas fa-briefcase me-2"></i>
                Professional Experience
              </h3>
              <div className="resume-column resume-left">
                {experience.map((exp, index) => (
                  <div key={index} className="resume-item">
                    <h4>{exp.position}</h4>
                    <h5>{exp.year}</h5>
                    <p><em>{exp.company}</em></p>
                    <ul>
                      {Array.isArray(exp.desc) ? (
                        exp.desc.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>{exp.desc}</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <hr />
      </div>

      {/* Contact Section */}
      <section data-aos="fade-up" className="cta-section theme-bg-light py-5 pb-0">
        <div className="container text-center single-col-max-width">
          <h2 id="contact" ref={contactRef} className="heading">Contact</h2>
          <div className="intro">
            <p>
              Interested in hiring me for your project or just want to say hi?
              You can fill in the contact form below or send me an email to{" "}
              <a className="text-link" href="mailto:#">
                simon.doe@yourwebsite.com
              </a>
            </p>
            <p>
              Want to get connected? Follow me on the social channels below.
            </p>
            <ul className="list-inline mb-0">
              {socialLink.map((social, index) => (
                <li key={index} className="list-inline-item mb-3">
                  <a className={social.label} href={social.link}>
                    <i className={`${social.icon} contact-social-icon`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="contact-section px-3 py-5 p-md-5">
        <div className="container">
          <form
            id="contact-form"
            className="contact-form col-lg-8 mx-lg-auto"
            method="post"
            action="#"
          >
            <h3 className="text-center mb-3">Get In Touch</h3>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="sr-only" htmlFor="cname">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cname"
                  name="name"
                  placeholder="Name"
                  minlength="2"
                  required=""
                  aria-required="true"
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="sr-only" htmlFor="cemail">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="cemail"
                  name="email"
                  placeholder="Email"
                  required=""
                  aria-required="true"
                />
              </div>
              <div className="col-12">
                <select id="services" className="form-select" name="services">
                  <option selected>
                    Select a service package you're interested in...
                  </option>
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="not sure">Not sure</option>
                </select>
                <div className="mt-2">
                  <small className="form-text text-muted pt-1">
                    <i className="fas fa-info-circle me-2 text-primary"></i>Want
                    to know what's included in each package? Check the{" "}
                    <a
                      className="text-link"
                      href="services.html"
                      target="_blank"
                    >
                      Services & Pricing
                    </a>{" "}
                    page.
                  </small>
                </div>
              </div>
              <div className="col-12">
                <label className="sr-only" htmlFor="cmessage">
                  Your message
                </label>
                <textarea
                  className="form-control"
                  id="cmessage"
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  required=""
                  aria-required="true"
                ></textarea>
              </div>
              <div className="form-group col-12">
                <button
                  type="submit"
                  className="btn btn-block btn-primary py-2"
                >
                  Send Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
