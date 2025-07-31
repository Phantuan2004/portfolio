import skills from "../data/skills";
import projects from "../data/project";
import "../styles/timeline.css";
import { Typewriter } from "react-simple-typewriter";
// Import i18next
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();
  const education = t('resume.educationList', { returnObjects: true });
  const course = t('resume.courseList', { returnObjects: true });

  const combinedList = [
    ...education.map((edu) => ({ ...edu, type: 'education' })),
    ...course.map((course) => ({ ...course, type: 'course' }))
  ];

  const experience = t('resume.experienceList', { returnObjects: true });

  // Xử lý ngăn tạo tab mới mặc định của Google Drive để tải file trực tiếp
  function handleDownload() {
    // Tạo 1 phần từ a <link> mởi trong DOM
    const link = document.createElement('a');
    // Gán href cho link, trỏ đến URL file PDF trên Google Drive
    link.href = 'https://drive.google.com/uc?export=download&id=1meD32exGNsT_DCtZS0WEiCWagLKPCumo';
    // Thêm thuộc tính 'download' cho thẻ <a> với tên file
    link.setAttribute('download', 'PHP Developer - Phan Hoàng Tuan.pdf');
    // Thêm thẻ <a> vào phần body của trang để nó trở thành một phần của DOM
    document.body.appendChild(link);
    // Giả lập sự kiện click lên thẻ <a> vừa tạo → kích hoạt trình duyệt tải file
    link.click();
    // Sau khi click xong, xóa thẻ <a> khỏi DOM để dọn dẹp
    document.body.removeChild(link);
  };

  return (
    <>
      {/* About Me Section */}
      <section id="about" ref={aboutRef} className="about-me-section p-3 p-lg-5 theme-bg-light">
        <div className="container">
          <div className="profile-teaser row">
            <div data-aos="fade-up" data-aos-delay="0" className="col">
              <h2 className="name font-weight-bold mb-1">{t('about.name')}</h2>
              <div className="tagline mb-3">
                <Typewriter words={["Frontend Developer", "PHP Developer", "Fullstack Developer"]} loop={0} cursor cursorStyle="|" typeSpeed={120} deleteSpeed={120} delaySpeed={2000} />
                </div>
              <div className="bio mb-4">
                {t('about.bio')}
              </div>
              <div className="mb-4">
                <a className="btn btn-primary me-2 mb-3" href="#resume" onClick={(e) => {e.preventDefault(); resumeRef.current.scrollIntoView({ behavior: "smooth" });}}>
                  <i className="fas fa-arrow-alt-circle-right me-2"></i>
                  <span className="d-none d-md-inline"></span> {t('intro.viewPortfolio')}
                </a>
                <a className="btn btn-secondary mb-3" onClick={handleDownload}>
                  <i className="fas fa-file-alt me-2"></i>
                  <span className="d-none d-md-inline"></span> {t('intro.downloadCV')}
                </a>
              </div>
            </div>

            <div className="col-md-5 col-lg-5">
              <img
                className="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
                src="assets/images/avatar.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Proficiency */}
      <section data-aos="fade-up" data-aos-delay="500" id="skills" ref={skillsRef} className="overview-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-3">{t('skills.title')}</h2>
          <div className="section-intro mb-5">
            {t('skills.tech')}
            <a className="text-link" href="resume.html">
              online resume
            </a>{" "}
            and{" "}
            <a className="text-link" href="">
              project portfolio
            </a>
            .
          </div>
          <div className="row">
            {skills.map((skill, index) => (
              <div key={index} className="item col-6 col-lg-3">
                <div className="item-inner text-center">
                  <div className="item-icon mb-3">
                    {Array.isArray(skill.icon) ? (
                      skill.icon.map((iconClass, iconIndex) => (
                        <i
                          key={iconIndex}
                          className={iconClass || "fa-solid fa-question"}
                          style={{
                            fontSize: '2.5rem',
                            color: skill.colors && skill.colors[iconIndex] ? skill.colors[iconIndex] : skill.color || '#666',
                          }}
                        ></i>
                      ))
                    ) : (
                      <i
                        className={skill.icon || "fa-solid fa-question"}
                        style={{
                          fontSize: '3rem',
                          color: skill.color || '#666',
                        }}
                      ></i>
                    )}
                  </div>
                  <h3 className="item-title" dangerouslySetInnerHTML={{ __html: skill.title }}></h3>
                  <div className="item-desc">{skill.desc}</div>
                </div>
              </div>
            ))}
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
            {t('projects.title')}
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
                      <i className="fas fa-eye me-2"></i>{t('projects.viewDetail')}
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
          <h2 className="resume-title">{t('resume.title')}</h2>
          
          <div className="row">
            {/* Education Column */}
            <div className="col-lg-6 mb-5">
              <h3 className="resume-section-heading">
                <i className="fas fa-graduation-cap me-2"></i>
                {t('resume.education')}
              </h3>
              <div className="resume-column resume-left">
              {combinedList.map((item, index) => (
                <div key={index} className="resume-item">
                  {item.type === 'education' ? (
                    <>
                      <h4>{item.degree}</h4>
                      <h5>{item.duration}</h5>
                      <p><em>{item.school}</em></p>
                      <p>{item.major}</p>
                      <p style={{marginLeft: '20px'}}>{item.specialization}</p>
                    </>
                  ) : (
                    <>
                      <h4>{item.title}</h4>
                      <h5>{item.duration}</h5>
                      <ul>
                        {item.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
              </div>
            </div>

            {/* Professional Experience Column */}
            <div className="col-lg-6 mb-5">
              <h3 className="resume-section-heading">
                <i className="fas fa-briefcase me-2"></i>
                {t('resume.experience')}
              </h3>
              <div className="resume-column resume-left">
                {experience.map((exp, index) => (
                  <div key={index} className="resume-item">
                    <h4>{exp.position}</h4>
                    <h5>{exp.duration}</h5>
                    <p><em>{exp.company}</em></p>
                    <ul>
                      {Array.isArray(exp.tasks) ? (
                        exp.tasks.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))
                      ) : (
                        <li>{exp.tasks}</li>
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
          <h2 id="contact" ref={contactRef} className="heading">{t('contact.title')}</h2>
          <div className="intro">
            <p>
              {t('contact.desc1')}
              <a className="text-link" href="mailto:#">
                phanhoangtuan21072004@gmail.com
              </a>
            </p>
            <p>
              {t('contact.desc2')}
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
            <h3 className="text-center mb-3">{t('contact.formTitle')}</h3>
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
                  placeholder={t('contact.formName')}
                  minlength={2}
                  required
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
                  placeholder={t('contact.formEmail')}
                  required
                  aria-required="true"
                />
              </div>
              <div className="col-12">
                <label className="sr-only" htmlFor="cmessage">
                  Your message
                </label>
                <textarea
                  className="form-control"
                  id="cmessage"
                  name="message"
                  placeholder={t('contact.formMessage')}
                  rows="10"
                  required
                  aria-required="true"
                ></textarea>
              </div>
              <div className="form-group col-12">
                <button
                  type="submit"
                  className="btn btn-block btn-primary py-2"
                >
                  {t('contact.formSubmit')}
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
