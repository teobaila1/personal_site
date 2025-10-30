import React, { useEffect, useState } from "react";
import "../styles/components/navbar.css";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  useEffect(() => { document.body.className = dark ? "dark" : ""; }, [dark]);

  return (
    <nav className={`navbar navbar-expand-lg ${dark ? "bg-dark navbar-dark" : "bg-light navbar-light"} sticky-top app-navbar`}>
      <div className="container">
        <a className="navbar-brand fw-semibold" href="#home">Teodor Băilă</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <button onClick={() => setDark(!dark)} className="dark-toggle ms-3" aria-label="Toggle dark">
            {dark ? "☾" : "☀︎"}
          </button>
        </div>
      </div>
    </nav>
  );
}
