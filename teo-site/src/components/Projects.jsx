import React from "react";
import "../styles/components/projects.css";

const PROJECTS = [
  {
    title: "ACS Hwarang Academy Sibiu",
    desc: "Full-Stack Web Application: program, gallery, accounts, admins.",
    tags: ["React", "Vite", "Bootstrap", "Flask", "Render", "Netlify"],
    demo: "https://hwarangsibiu.netlify.app/",
    code: "https://github.com/teobaila1/HWARANG_SITE_REACT",
  },
  {
    title: "Băilăs TaeKwon-Do Promotional Site",
    desc: "Static Website for Promoting TaeKwon-Do Courses",
    tags: ["React", "Vite", "Bootstrap"],
    demo: "https://bailastaekwon-dosibiu.ro/",
    code: "https://github.com/teobaila1/Alex_Teo_Site",
  },

];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="h1 fw-bold mb-4 text-center">Projects</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {PROJECTS.map((p, i) => (
            <div className="col" key={i}>
              <div className="card project-card h-100 shadow-sm">
                {/* opțional: <img src="/thumb.jpg" className="card-img-top" alt="" /> */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{p.title}</h5>
                  <p className="card-text text-secondary flex-grow-1">{p.desc}</p>

                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="badge bg-body-secondary text-body">{t}</span>
                    ))}
                  </div>

                  <div className="d-flex gap-2">
                    <a href={p.demo} className="btn btn-brand" target="_blank" rel="noreferrer">Demo</a>
                    <a href={p.code} className="btn btn-brand-outline" target="_blank" rel="noreferrer">Code</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
