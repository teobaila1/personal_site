import React from "react"
import "../styles/components/about.css"

export default function About() {
    return (<section id="about" className="about-section">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-4 text-center">
            <div className="about-avatar mx-auto">
              <img src="../../portret_Teo.jpg" alt="Teodor Băilă" className="img-fluid rounded-4 shadow-sm" />
            </div>
          </div>

          <div className="col-12 col-md-8">
            <h2 className="h1 fw-bold mb-3">About Me</h2>

            <p className="lead text-secondary">
              I’m Teodor Băilă (Teo), a tech-minded and creative person who lately enjoys working on full-stack
              web projects, combining design, coding, and functionality. I have a degree in Information
              Technology from “Lucian Blaga” University of Sibiu and I’m also an active Taekwon-Do ITF athlete
              and assistant coach at <strong>ACS Hwarang Academy Sibiu</strong>.
            </p>

            <p className="text-secondary">
              My background in martial arts taught me discipline, focus, and consistency, values that I apply
              in both coding and personal growth. I like exploring everything from frontend to backend,
              constantly learning and experimenting with new technologies.
            </p>

            <ul className="list-group list-group-flush mt-3">
              <li className="list-group-item px-0"><strong>Location:</strong> Sibiu, Romania</li>
              <li className="list-group-item px-0"><strong>Degree:</strong> BSc in Information Technology</li>
              <li className="list-group-item px-0"><strong>Focus Areas:</strong> Web development, UI design, Software Engineering</li>
              <li className="list-group-item px-0"><strong>Interests:</strong> Technology, Sports, continuous learning</li>
              <li className="list-group-item px-0"><strong>Main Hobbies:</strong> Football, TaeKwon-Do, Music</li>
            </ul>

            <div className="mt-4 d-flex gap-2 flex-wrap">
              <a href="#projects" className="btn btn-brand">Explore Projects</a>
              <a href="#contact" className="btn btn-brand-outline">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}