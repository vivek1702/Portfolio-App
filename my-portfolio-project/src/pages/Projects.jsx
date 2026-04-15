import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      name: "CRM App",
      tech: "React, Node, Express, MongoDB",
      github:
        "https://github.com/vivek1702/Full-Stack-web-Applications/tree/main/crm-app",
      demo: "https://drive.google.com/file/d/1O7OzBywt2tDxJNTo5QNuDNOpvxMKg85m/view?usp=sharing",
      img: "/images/imageProjectOne.png",
    },
    {
      name: "Ecommerce App",
      tech: "React, Node, Express, MongoDB",
      github:
        "https://github.com/vivek1702/Full-Stack-web-Applications/tree/main/EcommerceApp",
      demo: "https://drive.google.com/file/d/10dSwrnguB1b5J2uWK8lW1IRQikHLcORk/view?usp=drive_link",
      img: "/images/imageProjectTwo.png",
    },
  ];

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((item) => (
          <div className="project-card" key={item.name}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="tech">{item.tech}</p>
            <div className="project-buttons">
              <button onClick={() => window.open(`${item.github}`)}>
                GitHub
              </button>
              <button onClick={() => window.open(`${item.demo}`)}>
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
