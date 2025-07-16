export default function Experience() {
  //     <style>
  //     * {
  //         margin: 0;
  //         padding: 0;
  //         box-sizing: border-box;
  //     }

  //     body {
  //         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  //         background-color: #1a1a1a;
  //         color: #ffffff;
  //         line-height: 1.6;
  //     }

  //     .container {
  //         display: flex;
  //         min-height: 100vh;
  //     }

  //     /* Sidebar */
  //     .sidebar {
  //         width: 280px;
  //         background-color: #2d3748;
  //         padding: 2rem 0;
  //         position: fixed;
  //         height: 100vh;
  //         overflow-y: auto;
  //     }

  //     .profile-section {
  //         text-align: center;
  //         padding: 0 1.5rem;
  //         margin-bottom: 2rem;
  //     }

  //     .profile-img {
  //         width: 120px;
  //         height: 120px;
  //         border-radius: 50%;
  //         object-fit: cover;
  //         border: 4px solid #4a5568;
  //     }

  //     .profile-name {
  //         font-size: 1.5rem;
  //         font-weight: bold;
  //         margin: 1rem 0 0.5rem;
  //     }

  //     .profile-title {
  //         color: #a0aec0;
  //         font-size: 0.9rem;
  //     }

  //     .profile-description {
  //         color: #a0aec0;
  //         font-size: 0.8rem;
  //         margin-top: 1rem;
  //     }

  //     .social-links {
  //         display: flex;
  //         justify-content: center;
  //         gap: 0.5rem;
  //         margin-top: 1.5rem;
  //     }

  //     .social-link {
  //         width: 40px;
  //         height: 40px;
  //         border-radius: 50%;
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //         background-color: #4a5568;
  //         color: #ffffff;
  //         text-decoration: none;
  //         font-size: 1.2rem;
  //         transition: background-color 0.3s;
  //     }

  //     .social-link:hover {
  //         background-color: #68d391;
  //     }

  //     /* Navigation */
  //     .nav-menu {
  //         list-style: none;
  //         padding: 0 1.5rem;
  //     }

  //     .nav-item {
  //         margin-bottom: 0.5rem;
  //     }

  //     .nav-link {
  //         display: flex;
  //         align-items: center;
  //         padding: 0.75rem 1rem;
  //         color: #a0aec0;
  //         text-decoration: none;
  //         border-radius: 8px;
  //         transition: all 0.3s;
  //         font-size: 0.9rem;
  //     }

  //     .nav-link:hover,
  //     .nav-link.active {
  //         background-color: #4a5568;
  //         color: #68d391;
  //     }

  //     .nav-icon {
  //         margin-right: 0.75rem;
  //         font-size: 1.1rem;
  //     }

  //     /* Main Content */
  //     .main-content {
  //         flex: 1;
  //         margin-left: 280px;
  //         padding: 2rem;
  //     }

  //     .header {
  //         margin-bottom: 3rem;
  //     }

  //     .header h1 {
  //         font-size: 2.5rem;
  //         font-weight: 700;
  //         margin-bottom: 1rem;
  //         border-left: 4px solid #68d391;
  //         padding-left: 1rem;
  //     }

  //     .header p {
  //         color: #a0aec0;
  //         font-size: 1.1rem;
  //         max-width: 800px;
  //     }

  //     /* Experience Timeline */
  //     .experience-timeline {
  //         position: relative;
  //         padding-left: 2rem;
  //     }

  //     .experience-timeline::before {
  //         content: '';
  //         position: absolute;
  //         left: 0;
  //         top: 0;
  //         bottom: 0;
  //         width: 2px;
  //         background-color: #4a5568;
  //     }

  //     .experience-item {
  //         position: relative;
  //         margin-bottom: 3rem;
  //         padding-left: 2rem;
  //     }

  //     .experience-item::before {
  //         content: '';
  //         position: absolute;
  //         left: -1.5rem;
  //         top: 0.5rem;
  //         width: 12px;
  //         height: 12px;
  //         background-color: #68d391;
  //         border-radius: 50%;
  //         border: 3px solid #1a1a1a;
  //     }

  //     .experience-header {
  //         display: flex;
  //         justify-content: space-between;
  //         align-items: flex-start;
  //         margin-bottom: 1rem;
  //         flex-wrap: wrap;
  //         gap: 1rem;
  //     }

  //     .experience-title {
  //         flex: 1;
  //     }

  //     .job-title {
  //         font-size: 1.4rem;
  //         font-weight: 600;
  //         color: #ffffff;
  //         margin-bottom: 0.25rem;
  //     }

  //     .company-name {
  //         font-size: 1.1rem;
  //         color: #68d391;
  //         margin-bottom: 0.5rem;
  //     }

  //     .job-duration {
  //         color: #a0aec0;
  //         font-size: 0.9rem;
  //         white-space: nowrap;
  //     }

  //     .job-description {
  //         color: #a0aec0;
  //         margin-bottom: 1rem;
  //         line-height: 1.7;
  //     }

  //     .skills-used {
  //         display: flex;
  //         flex-wrap: wrap;
  //         gap: 0.5rem;
  //     }

  //     .skill-tag {
  //         background-color: #4a5568;
  //         color: #ffffff;
  //         padding: 0.25rem 0.75rem;
  //         border-radius: 20px;
  //         font-size: 0.8rem;
  //         font-weight: 500;
  //     }

  //     /* Responsive Design */
  //     @media (max-width: 768px) {
  //         .sidebar {
  //             width: 100%;
  //             position: relative;
  //             height: auto;
  //         }

  //         .main-content {
  //             margin-left: 0;
  //             padding: 1rem;
  //         }

  //         .header h1 {
  //             font-size: 2rem;
  //         }

  //         .experience-timeline {
  //             padding-left: 1rem;
  //         }

  //         .experience-item {
  //             padding-left: 1.5rem;
  //         }

  //         .experience-header {
  //             flex-direction: column;
  //             align-items: flex-start;
  //         }
  //     }
  // </style>
  return (
    <>
      <div className="container">
        <main className="main-content">
          <div className="header">
            <h1>Experience</h1>
            <p>
              I have more than 10 years of experience building software for
              clients all over the world. Here's a detailed look at my
              professional journey and the impact I've made at various
              organizations.
            </p>
          </div>

          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-title">
                  <h3 className="job-title">Senior Software Engineer</h3>
                  <div className="company-name">TechCorp Solutions</div>
                </div>
                <div className="job-duration">2021 - Present</div>
              </div>
              <p className="job-description">
                Leading the development of scalable web applications serving
                over 1 million users. Architected microservices infrastructure
                that improved system performance by 40% and reduced deployment
                time by 60%. Mentoring junior developers and establishing best
                practices for code quality and testing.
              </p>
              <div className="skills-used">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-title">
                  <h3 className="job-title">Full Stack Developer</h3>
                  <div className="company-name">Digital Innovations Inc.</div>
                </div>
                <div className="job-duration">2019 - 2021</div>
              </div>
              <p className="job-description">
                Developed and maintained multiple client-facing applications
                using modern web technologies. Collaborated with UX/UI designers
                to create intuitive user interfaces. Implemented automated
                testing suites that reduced bug reports by 35% and improved code
                coverage to 85%.
              </p>
              <div className="skills-used">
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">Jest</span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-title">
                  <h3 className="job-title">Frontend Developer</h3>
                  <div className="company-name">StartupXYZ</div>
                </div>
                <div className="job-duration">2017 - 2019</div>
              </div>
              <p className="job-description">
                Built responsive web applications from scratch using React and
                Angular. Optimized application performance resulting in 50%
                faster load times. Worked closely with product managers to
                translate business requirements into technical specifications.
              </p>
              <div className="skills-used">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Angular</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Sass</span>
                <span className="skill-tag">Webpack</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-title">
                  <h3 className="job-title">Junior Web Developer</h3>
                  <div className="company-name">WebDev Agency</div>
                </div>
                <div className="job-duration">2015 - 2017</div>
              </div>
              <p className="job-description">
                Started my professional journey developing websites for small to
                medium businesses. Learned the fundamentals of web development,
                version control, and client communication. Contributed to over
                20 successful website launches.
              </p>
              <div className="skills-used">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">WordPress</span>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-title">
                  <h3 className="job-title">Web Development Intern</h3>
                  <div className="company-name">Local Tech Company</div>
                </div>
                <div className="job-duration">2014 - 2015</div>
              </div>
              <p className="job-description">
                Gained hands-on experience in web development while completing
                my degree. Assisted senior developers with bug fixes and feature
                implementations. Learned industry best practices and
                professional development workflows.
              </p>
              <div className="skills-used">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">jQuery</span>
                <span className="skill-tag">Bootstrap</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
