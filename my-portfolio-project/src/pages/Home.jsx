import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiBootstrap,
  SiVercel,
} from "react-icons/si";
import { FaDatabase, FaGithubSquare } from "react-icons/fa";
import "./Home.css";
import { useState } from "react";
import Projects from "./Projects";

export default function Home() {
  const [toast, setToast] = useState("");

  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Python", icon: <SiPython /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "GitHub", icon: <FaGithubSquare /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
  ];

  const handleCopy = (text, message) => {
    navigator.clipboard.writeText(text);
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  return (
    <div className="home">
      <section className="hero">
        {toast && <div className="toast">{toast}</div>}
        <div className="hero-left">
          <h3>
            Hi, I'm <span>Vivek Singh</span>
          </h3>
          <p>
            Full-Stack Developer passionate about building robust web
            applications with modern technologies. Expertise in React.js,
            Node.js, and Express.js for dynamic frontends and scalable backends.
            Proficient in MongoDB and PostgreSQL for database design. I leverage
            JavaScript, Python, Bootstrap, and deployment platforms like Vercel
            to create production-ready solutions that drive real impact.
          </p>
          {/* contacts */}
          <div className="hero-contact">
            <span className="contact-label">Connect</span>

            <div className="icons">
              <MdEmail
                onClick={() =>
                  handleCopy("svivek1702@gmail.com", "Email copied!")
                }
              />

              <FaLinkedin
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vivek-singh-3a8044160/",
                  )
                }
              />

              <FaTwitter
                onClick={() => window.open("https://x.com/svivek1702")}
              />

              <FaPhone
                onClick={() => handleCopy("+917879059944", "Phone copied!")}
              />
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src="/images/git-hub pp.jpg" alt="profile-picture" />
        </div>
      </section>

      <Projects />

      <section className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Vivek Singh • All rights reserved</p>
      </footer>
    </div>
  );
}
