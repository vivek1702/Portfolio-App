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
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { FaDatabase, FaGithubSquare } from "react-icons/fa";
import "./Home.css";
import { useState } from "react";
import Projects from "./Projects";
import LeetCodeStats from "../components/LeetCodeStats";
import GitHubStats from "../components/GitHubStats";

export default function Home({ toast, setToast }) {
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
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss /> },
  ];

  const handleCopy = (text, message) => {
    navigator.clipboard.writeText(text);
    setToast(message);
  };

  return (
    <div className="home">
      <section className="hero">
        {toast && <div className="toast">{toast}</div>}

        {/* Left Side - Profile Picture + Name Card (20%) */}
        <div className="hero-left">
          <div className="profile-card">
            <img src="/images/git-hub pp.jpg" alt="profile-picture" />
            <div className="profile-ring"></div>
          </div>

          <div className="name-card">
            <p>Vivek Singh</p>
          </div>
        </div>

        {/* Right Side - Description + Skills (80%) */}
        <div className="hero-right">
          <p className="hero-description">
            Hi, I'm Full-stack developer passionate about building robust,
            scalable web applications. I focus on creating seamless user
            experiences with clean code and modern development practices.
          </p>

          {/* Skills Section */}
          <div className="hero-skills">
            <h4>Technical Skills</h4>
            <div className="hero-skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="hero-skill-card">
                  <div className="hero-skill-icon">{skill.icon}</div>
                  <p className="hero-skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section className="stats-section">
        <h2 className="section-title">Coding Profile</h2>
        <div className="stats-container">
          <LeetCodeStats />
          <GitHubStats />
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Vivek Singh • All rights reserved</p>
      </footer>
    </div>
  );
}
