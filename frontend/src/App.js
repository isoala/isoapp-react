import React, { useState, useEffect } from 'react';
import './App.css'; // Keep your existing basic styles
import profileImage from './profile.jpg'; // Import your profile image
import instagramIcon from './instagram-icon.png';
import githubIcon from "./github-icon.png";
import linkedinIcon from "./linkedin-icon.png";
import resume from "./Resume_Ismaeel_Alarcon.pdf";
import chatIcon from "./chat-icon.png";

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Active Section:", entry.target.id); // Add this line
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Adjust as needed
      }
    );

    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container">
      <div className="sidebar">
        <h1 className="name">
          <a>Abdurahman Alarcon</a>
        </h1>
        <p className="title">Student at George Mason University</p>
        <p className="description">
          I am an Information Technology student interested in mastering the fundamentals in the tech field.</p>
        
        <img src={profileImage} alt="Your Profile" className="profile-image " />
        
        <card />
        <nav className="nav">
          <ul className="mt-6 w-max">
            <li>
              <a
                className={`nav-button ${activeSection === 'about' ? 'active' : ''}`}
                href="#about"
                onClick={() => handleNavLinkClick('about')}
              >
                <span className="sr-only">About</span>
              </a>
            </li>
            <li>
              <a
                className={`nav-button ${activeSection === 'experience' ? 'active' : ''}`}
                href="#experience"
                onClick={() => handleNavLinkClick('experience')}
              >
                <span className="sr-only">Experience</span>
              </a>
            </li>
            <li>
              <a
                className={`nav-button ${activeSection === 'projects' ? 'active' : ''}`}
                href="#projects"
                onClick={() => handleNavLinkClick('projects')}
              >
                <span className="sr-only">Projects</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="social-links">
          <a
            href="https://www.github.com/isoala"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abdurahman-alarcon/-7a1705293/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/manny.ent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/manny.ent"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src={chatIcon}
              alt="contact me"
              className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
          
        </div>
      </div>
      <div className="main-content">
        <section id="about" className="section">
          <h2 className="about">
            <a>ABOUT</a>
          </h2>
          <p>
            dedicated third-year student at 
            <a
              className="font-medium text-gray-300 hover:text-teal-500 focus-visible:text-teal-500 transition duration-200"
              href="https://www.gmu.edu/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GMU (opens in a new tab)">
              George Mason University
            </a>
            , I am deeply immersed
            in the dynamic world of information technology and eager to transition my academic
            achievements into a thriving career within the tech industry. My collegiate journey
            has been marked by a consistent pursuit of excellence across a range of crucial IT
            domains, including robust networking principles, proactive cybersecurity strategies, and
            engaging web development practices. I possess a strong foundational understanding and a
            practical aptitude for tackling complex technical challenges, consistently seeking opportunities to
            expand my knowledge and refine my skills beyond the standard curriculum.
          </p>
          <p>
            My proficiency extends to several key programming languages that are highly
            relevant in today's tech landscape. I primarily code in Java, leveraging its
            versatility for building scalable and robust applications. My JavaScript skills
            enable me to create interactive and dynamic front-end experiences, while my command
            of Python allows for efficient data manipulation, automation, and the development
            of diverse software solutions. This multi-faceted coding background equips me with
            the adaptability to contribute effectively to various stages of the software development
            lifecycle.
          </p>
          <p>
            I spend my freetime engaging in hobbies that encourage growth and challenge me. A few
            extracurriculars I am enthusiastic about include Chess, Brazilian Jiu-Jitsu, and journaling.
            chess is my way of challenging myself mentally while training jiu-jitsu challenges me physically.
            Journaling has helped me drop my screen time and its stuck around ever since I picked it up.
          </p>
        </section>

        <section id="experience" className="section">
          <h2>EXPERIENCE</h2>
          <div className="experience-item">
            <h3>Registered Behavioral Therapist · Continuum
            <a
      className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover ItemCard__main-header-link css-2wjk0v-MuiTypography-root-MuiLink-root"
      href="https://www.autismspectrumalliance.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="link-icon"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="LaunchRoundedIcon"
      >
        <path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1"fill="teal"></path>
        
      </svg>
    </a>
            </h3>


            <p className="duration">OCT 2024 - PRESENT</p>
            <ul>
              <li>Utilize behavioral tracking software to log patient progress and analyze patterns in therapy outcomes.</li>
              <li>Assist in data collection and reporting, ensuring accurate documentation of therapy sessions and adherence to HIPAA compliant record-keeping.</li>
              <li>Collaborate with therapists to interpret behavioral data trends, helping to refine individualized treatment plans.</li>
            </ul>
          </div>
          
          <div className="experience-item">
            <h3>Diplomatic Technology Intern · Department of State <a
      className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover ItemCard__main-header-link css-2wjk0v-MuiTypography-root-MuiLink-root"
      href="https://tr.usembassy.gov/ankara/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="link-icon"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="LaunchRoundedIcon"
      >
        <path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1"fill="teal"></path>
        
      </svg>
    </a></h3>
            <p className="duration">MAY 2024 - AUG 2024</p>
            <ul>
              <li>Developed and deployed an information-oriented application for U.S. expatriates in Turkey using PowerApps and
              Azure SQL databases.</li>
              <li>Managed and maintained Cisco networking systems, Linux servers, and encrypted radio communications across multiple embassy departments.</li>
              <li>Conducted IT infrastructure maintenance, software debugging, and network security enhancements utilizing Docker, Kubernetes, virtual machines, and batch scripting.</li>
            </ul>
          </div>
        <div className="experience-item">
            <h3>STEM Tutor · StudyHouse Education <a
      className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover ItemCard__main-header-link css-2wjk0v-MuiTypography-root-MuiLink-root"
      href="https://www.studyhouseeducation.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="link-icon"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="LaunchRoundedIcon"
      >
        <path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1"fill="teal"></path>
        
      </svg>
    </a></h3>
            <p className="duration">MAY 2023 - PRESENT</p>
            <ul>
              <li>Provided technical tutoring in Calculus, Computer Science, and Biology, focusing on problem-solving strategies and real-world applications.</li>
              <li>Developed custom study plans and digital resources, integrating online learning tools to enhance engagement and retention.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Shift Leader · Jersey Mike's <a
      className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover ItemCard__main-header-link css-2wjk0v-MuiTypography-root-MuiLink-root"
      href="https://www.studyhouseeducation.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="link-icon"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="LaunchRoundedIcon"
      >
        <path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1M14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1"fill="teal"></path>
        
      </svg>
    </a></h3>
            <p className="duration">DEC 2021 - FEB 2024</p>
            <ul>
              <li>Oversaw team member task allocation and workflow optimization, utilizing real-time communication systems to ensure efficiency.</li>
              <li>Managed end-of-shift financial reconciliation, including cash drawer balancing, POS system reporting verification, and secure handling of daily receipts, maintaining honesty and integrity.</li>
            </ul>
          </div>
        </section>


        <section id="projects" className="section">
          <h2>PROJECTS</h2>
          <div className="project-item">
            <h3>Chess-cli</h3>
            <p className="description">
              Chess game written in Java, play against an AI of varying difficulty in the terminal. 
            </p>
            {/* You can add links to live demos or GitHub repositories */}
            <a href="#" target="_blank" rel="noopener noreferrer">
               Demo
            </a>{' '}
            |{' '}
            <a href="https://github.com/isoala/chesscli" target="_blank" rel="noopener noreferrer">
            GitHub
            </a>
            {/* You can also include images or technologies used */}
          </div>
          {/* Add more project items as needed */}
          <div className="project-item">
            <h3>Project Title 2</h3>
            <p className="description">
              more to come soon.
            </p>
          </div>
          <a
      href={resume}
      download="Ismaeel_Alarcon_Resume.pdf"
      className="group/link"
    >
          <span><span class="inline-block">View Full Résumé<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg></span></span>
        </a>
        </section>
        <div className="final">
          <p className='description'>
            coded in
            <a
              className="font-medium text-gray-300 hover:text-teal-500 focus-visible:text-teal-500 transition duration-200 underline-none"
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="VSCode (opens in a new tab)">
                Visual Studio Code
            </a>
            by me. Built with
            <a
              className="font-medium text-gray-300 hover:text-teal-500 focus-visible:text-teal-500 transition duration-200 underline-none"
                href="https://nodejs.org/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Node.JS (opens in a new tab)">
                Node.JS
            </a>
            ,
            <a
              className="font-medium text-gray-300 hover:text-teal-500 focus-visible:text-teal-500 transition duration-200 underline-none"
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="React (opens in a new tab)">
                 React
            </a>
            and
            <a
              className="font-medium text-gray-300 hover:text-teal-500 focus-visible:text-teal-500 transition duration-200"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="TailwindCSS (opens in a new tab)">
                TailwindCSS
            </a>
            .
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default App;