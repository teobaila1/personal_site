import React from "react";
import "../styles/components/hero.css";

export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="col-12 col-lg-8">
                    <h1 className="display-5 fw-bold">Summary</h1>
                    <p className="lead mt-3 text-secondary">
                        I’m a technology enthusiast, beginner frontend and web developer, and a dedicated Taekwon-Do
                        athlete in progress.
                        I enjoy building web applications, exploring new tools, and creating digital experiences that
                        blend design, logic, and performance.
                        I’m also passionate about software engineering (which is actually my Bachelor's Degree) and
                        continuous learning.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-brand">View Projects</a>
                        <a href="#contact" className="btn btn-brand-outline">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
