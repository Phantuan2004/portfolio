import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <>
      <section className="about-me-section p-3 p-lg-5 theme-bg-light">
        <div className="container">
          <div className="profile-teaser row">
            <div className="col">
              <h2 className="name font-weight-bold mb-1">Simon Doe</h2>
              <div className="tagline mb-3">Senior Software Engineer</div>
              <div className="bio mb-4">
                I'm a software engineer specialised in frontend and backend
                development for complex scalable web apps. I write about
                software development on{" "}
                <Link className="text-link" to="/blog">
                  my blog
                </Link>
                . Want to know how I may help your project? Check out my project{" "}
                <Link className="text-link" to="/portfolio">
                  portfolio
                </Link>{" "}
                and{" "}
                <Link className="text-link" to="/resume">
                  online resume
                </Link>
                .
              </div>
              <div className="mb-4">
                <a className="btn btn-primary me-2 mb-3" href="portfolio.html">
                  <i className="fas fa-arrow-alt-circle-right me-2"></i>
                  <span className="d-none d-md-inline">View</span> Portfolio
                </a>
                <a className="btn btn-secondary mb-3" href="resume.html">
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

      <section className="overview-section p-3 p-lg-5">
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
            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <div className="item-icon">
                  <i className="fa-brands fa-js-square"></i>
                </div>
                <h3 className="item-title">Vanilla JavaScript</h3>
                <div className="item-desc">
                  List skills/technologies here. You can change the icon above
                  to any of the 2000+{" "}
                  <a
                    className="theme-link"
                    href="https://fontawesome.com/"
                    target="_blank"
                  >
                    FontAwesome 5 free icons
                  </a>{" "}
                  available. Aenean commodo ligula eget dolor.
                </div>
              </div>
            </div>
            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <div className="item-icon">
                  <i className="fa-brands fa-angular me-2"></i>
                  <i className="fa-brands fa-react me-2"></i>
                  <i className="fa-brands fa-vuejs"></i>
                </div>
                <h3 className="item-title">Angular, React &amp; Vue</h3>
                <div className="item-desc">
                  List skills/technologies here. You can change the icon above
                  to any of the 2000+{" "}
                  <a
                    className="theme-link"
                    href="https://fontawesome.com/"
                    target="_blank"
                  >
                    FontAwesome 5 free icons
                  </a>{" "}
                  available. Aenean commodo ligula eget dolor.{" "}
                </div>
              </div>
            </div>

            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <div className="item-icon">
                  <i className="fa-brands fa-node-js"></i>
                </div>
                <h3 className="item-title">Node.js</h3>
                <div className="item-desc">
                  List skills/technologies here. You can change the icon above
                  to any of the 2000+{" "}
                  <a
                    className="theme-link"
                    href="https://fontawesome.com/"
                    target="_blank"
                  >
                    FontAwesome 5 free icons
                  </a>{" "}
                  available. Aenean commodo ligula eget dolor.{" "}
                </div>
              </div>
            </div>

            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <div className="item-icon">
                  <i className="fa-brands fa-python"></i>
                </div>
                <h3 className="item-title">Python &amp; Django</h3>
                <div className="item-desc">
                  List skills/technologies here. You can change the icon above
                  to any of the 2000+{" "}
                  <a
                    className="theme-link"
                    href="https://fontawesome.com/"
                    target="_blank"
                  >
                    FontAwesome 5 free icons
                  </a>{" "}
                  available. Aenean commodo ligula eget dolor.{" "}
                </div>
              </div>
            </div>
            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <div className="item-icon">
                  <i className="fa-brands fa-php"></i>
                </div>
                <h3 className="item-title">PHP</h3>
                <div className="item-desc">
                  List skills/technologies here. You can change the icon above
                  to any of the 2000+{" "}
                  <a
                    className="theme-link"
                    href="https://fontawesome.com/"
                    target="_blank"
                  >
                    FontAwesome 5 free icons
                  </a>{" "}
                  available. Aenean commodo ligula eget dolor.{" "}
                </div>
              </div>
            </div>
            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <div className="item-icon">
                  <i className="fa-brands fa-npm me-2"></i>
                  <i className="fa-brands fa-gulp me-2"></i>
                  <i className="fa-brands fa-grunt"></i>
                </div>
                <h3 className="item-title">npm, Gulp &amp; Grunt</h3>
                <div className="item-desc">
                  List skills/technologies here. You can change the icon above
                  to any of the 2000+{" "}
                  <a
                    className="theme-link"
                    href="https://fontawesome.com/"
                    target="_blank"
                  >
                    FontAwesome 5 free icons
                  </a>{" "}
                  available. Aenean commodo ligula eget dolor.{" "}
                </div>
              </div>
            </div>
            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <div className="item-icon">
                  <i className="fa-brands fa-html5 me-2"></i>
                  <i className="fa-brands fa-css3-alt"></i>
                </div>
                <h3 className="item-title">HTML &amp; CSS</h3>
                <div className="item-desc">
                  List skills/technologies here. You can change the icon above
                  to any of the 2000+{" "}
                  <a
                    className="theme-link"
                    href="https://fontawesome.com/"
                    target="_blank"
                  >
                    FontAwesome 5 free icons
                  </a>{" "}
                  available. Aenean commodo ligula eget dolor.{" "}
                </div>
              </div>
            </div>
            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <div className="item-icon">
                  <i className="fa-brands fa-sass me-2"></i>
                  <i className="fa-brands fa-less"></i>
                </div>
                <h3 className="item-title">Sass &amp; LESS</h3>
                <div className="item-desc">
                  List skills/technologies here. You can change the icon above
                  to any of the 2000+{" "}
                  <a
                    className="theme-link"
                    href="https://fontawesome.com/"
                    target="_blank"
                  >
                    FontAwesome 5 free icons
                  </a>{" "}
                  available. Aenean commodo ligula eget dolor.{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-3">
            <a href="services.html" className="btn btn-primary">
              <i className="fas fa-arrow-alt-circle-right me-2"></i>Services
              &amp; Pricing
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        <hr />
      </div>

      <section className="featured-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">
            Featured Projects
          </h2>
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-12 col-xl-5 card-img-holder">
                    <img
                      src="assets/images/project/project-1.jpg"
                      className="card-img"
                      alt="image"
                    />
                  </div>
                  <div className="col-12 col-xl-7">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="project.html" className="theme-link">
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Project intro lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Cum sociis natoque penatibus et magnis
                        dis parturient montes.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: Google</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a className="link-mask-link" href="project.html"></a>
                  <div className="link-mask-text">
                    <a className="btn btn-secondary" href="project.html">
                      <i className="fas fa-eye me-2"></i>View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-12 col-xl-5 card-img-holder">
                    <img
                      src="assets/images/project/project-2.jpg"
                      className="card-img"
                      alt="image"
                    />
                  </div>
                  <div className="col-12 col-xl-7">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="project.html" className="theme-link">
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: Dropbox</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a className="link-mask-link" href="project.html"></a>
                  <div className="link-mask-text">
                    <a className="btn btn-secondary" href="project.html">
                      <i className="fas fa-eye me-2"></i>View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-12 col-xl-5 card-img-holder">
                    <img
                      src="assets/images/project/project-3.jpg"
                      className="card-img"
                      alt="image"
                    />
                  </div>
                  <div className="col-12 col-xl-7">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="project.html" className="theme-link">
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: Google</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a className="link-mask-link" href="project.html"></a>
                  <div className="link-mask-text">
                    <a className="btn btn-secondary" href="project.html">
                      <i className="fas fa-eye me-2"></i>View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="card project-card">
                <div className="row no-gutters">
                  <div className="col-12 col-xl-5 card-img-holder">
                    <img
                      src="assets/images/project/project-4.jpg"
                      className="card-img"
                      alt="image"
                    />
                  </div>
                  <div className="col-12 col-xl-7">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href="project.html" className="theme-link">
                          Project Heading
                        </a>
                      </h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">Client: Uber</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="link-mask">
                  <a className="link-mask-link" href="project.html"></a>
                  <div className="link-mask-text">
                    <a className="btn btn-secondary" href="project.html">
                      <i className="fas fa-eye me-2"></i>View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
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

      <section className="latest-blog-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">
            Latest Blog Posts
          </h2>
          <div className="row">
            <div className="col-md-4 mb-5">
              <div className="card blog-post-card">
                <img
                  className="card-img-top"
                  src="assets/images/blog/blog-post-thumb-card-1.jpg"
                  alt="image"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a className="theme-link" href="blog-post.html">
                      Top 3 JavaScript Frameworks
                    </a>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient...
                  </p>
                  <p className="mb-0">
                    <a className="text-link" href="blog-post.html">
                      Read more &rarr;
                    </a>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Published 2 days ago</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card blog-post-card">
                <img
                  className="card-img-top"
                  src="assets/images/blog/blog-post-thumb-card-2.jpg"
                  alt="image"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a className="theme-link" href="blog-post.html">
                      About Remote Working
                    </a>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient...
                  </p>
                  <p className="mb-0">
                    <a className="text-link" href="blog-post.html">
                      Read more &rarr;
                    </a>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Published a week ago</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card blog-post-card">
                <img
                  className="card-img-top"
                  src="assets/images/blog/blog-post-thumb-card-3.jpg"
                  alt="image"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a className="theme-link" href="blog-post.html">
                      A Guide to Becoming a Full-Stack Developer
                    </a>
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient...
                  </p>
                  <p className="mb-0">
                    <a className="text-link" href="blog-post.html">
                      Read more &rarr;
                    </a>
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Published 3 weeks ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-3">
            <a href="blog-home.html" className="btn btn-primary">
              <i className="fas fa-arrow-alt-circle-right me-2"></i>View Blog
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
