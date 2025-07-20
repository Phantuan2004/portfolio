import React, {useState} from "react";
import skills from "../data/skills";
import projects from "../data/project";
import "../styles/timeline.css";

function AboutMe({ aboutRef, skillsRef, projectsRef, contactRef, resumeRef }) {
  return (
    <>
      <section id="about" ref={aboutRef} className="about-me-section p-3 p-lg-5 theme-bg-light">
        <div className="container">
          <div className="profile-teaser row">
            <div className="col">
              <h2 className="name font-weight-bold mb-1">Simon Doe</h2>
              <div className="tagline mb-3">Senior Software Engineer</div>
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
                  <span className="d-none d-md-inline">View</span> Resume
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

      <section id="skills" ref={skillsRef} className="overview-section p-3 p-lg-5">
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

      <section id="projects" ref={projectsRef} className="featured-section p-3 p-lg-5">
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

      {/* Resume Section - Fixed */}
      <section id="resume" ref={resumeRef} className="resume-section p-3 p-lg-5">
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
                
                <div className="resume-item">
                  <h4>Master of Computer Science</h4>
                  <h5>2018 - 2020</h5>
                  <p><em>Stanford University, CA</em></p>
                  <p>Specialized in Machine Learning and Artificial Intelligence. Graduated with honors (GPA: 3.8/4.0). Completed advanced coursework in neural networks, deep learning, and natural language processing.</p>
                </div>

                <div className="resume-item">
                  <h4>Bachelor of Software Engineering</h4>
                  <h5>2014 - 2018</h5>
                  <p><em>Massachusetts Institute of Technology, MA</em></p>
                  <p>Focused on software development, algorithms, and system design. Dean's List for 6 semesters. Senior capstone project involved developing a distributed computing framework.</p>
                </div>

                <div className="resume-item">
                  <h4>High School Diploma</h4>
                  <h5>2010 - 2014</h5>
                  <p><em>Tech Preparatory High School, CA</em></p>
                  <p>Valedictorian with focus on Mathematics and Computer Science. Founded and led the school's first programming club.</p>
                </div>

              </div>
            </div>

            {/* Professional Experience Column */}
            <div className="col-lg-6 mb-5">
              <h3 className="resume-section-heading">
                <i className="fas fa-briefcase me-2"></i>
                Professional Experience
              </h3>
              <div className="resume-column resume-left">
                
                <div className="resume-item">
                  <h4>Senior Software Engineer</h4>
                  <h5>2022 - Present</h5>
                  <p><em>Google Inc., Mountain View, CA</em></p>
                  <ul>
                    <li>Lead development of scalable web applications serving 10M+ daily active users</li>
                    <li>Mentor team of 8 junior developers and drive technical architecture decisions</li>
                    <li>Improved system performance by 40% through code optimization and caching strategies</li>
                    <li>Implemented microservices architecture reducing deployment time by 60%</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Software Engineer</h4>
                  <h5>2020 - 2022</h5>
                  <p><em>Facebook (Meta), Menlo Park, CA</em></p>
                  <ul>
                    <li>Developed and maintained core platform features used by billions of users</li>
                    <li>Built real-time messaging system handling 10M+ messages per day</li>
                    <li>Reduced page loading time by 35% across main platform through optimization</li>
                    <li>Optimized database queries reducing server costs by $2M annually</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Junior Software Developer</h4>
                  <h5>2018 - 2020</h5>
                  <p><em>StartupXYZ, San Francisco, CA</em></p>
                  <ul>
                    <li>Built company's first mobile application from scratch using React Native</li>
                    <li>Implemented CI/CD pipeline improving deployment efficiency by 50%</li>
                    <li>Developed RESTful APIs and integrated third-party services</li>
                    <li>Contributed to 50% increase in user engagement through feature development</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <hr />
      </div>

      <section className="cta-section theme-bg-light py-5 pb-0">
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
              <li className="list-inline-item mb-3">
                <a className="twitter" href="#">
                  <i className="fa-brands fa-x-twitter fa-fw fa-lg"></i>
                </a>
              </li>

              <li className="list-inline-item mb-3">
                <a className="linkedin" href="#">
                  <i className="fa-brands fa-linkedin-in fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="github" href="#">
                  <i className="fa-brands fa-github-alt fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="instagram" href="#">
                  <i className="fa-brands fa-instagram fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="stack-overflow" href="#">
                  <i className="fa-brands fa-stack-overflow fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="medium" href="#">
                  <i className="fa-brands fa-medium-m fa-fw fa-lg"></i>
                </a>
              </li>
              <li className="list-inline-item mb-3">
                <a className="codepen" href="#">
                  <i className="fa-brands fa-codepen fa-fw fa-lg"></i>
                </a>
              </li>

              <li className="list-inline-item mb-3">
                <a className="facebook" href="#">
                  <i className="fa-brands fa-facebook-f fa-fw fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-section px-3 py-5 p-md-5">
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
                <label className="sr-only" for="cname">
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
                <label className="sr-only" for="cemail">
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
                <label className="sr-only" for="cmessage">
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
