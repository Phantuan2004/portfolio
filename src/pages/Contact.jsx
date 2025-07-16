export default function Contact() {
  return (
    <>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Contact</h2>
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
                      Services &amp; Pricing
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
