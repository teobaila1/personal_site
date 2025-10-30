import React, { useState } from "react";
import "../styles/components/contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] Mesaj de la ${form.name}`);
    const body = encodeURIComponent(`Nume: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:teo@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-6">
            <h2 className="h1 fw-bold mb-3">Contact</h2>
            <p className="text-secondary">
              Tell me a few details about your ideas and I will contact you back.
            </p>

            <form className="mt-4" onSubmit={submit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn btn-brand">Send</button>
              <a href="mailto:teodor.baila@yahoo.com" className="btn btn-brand-outline ms-2">Direct email</a>
            </form>
          </div>

          <div className="col-12 col-lg-5 ms-lg-auto">
            <div className="contact-card p-4 rounded-4 shadow-sm">
              <h5 className="fw-semibold mb-3">Quick Info</h5>
              <ul className="list-unstyled m-0">
                <li className="mb-2"><strong>Location:</strong> Sibiu, România</li>
                {/*<li className="mb-2"><strong>Disponibil:</strong> Entry-level / Junior Frontend (React)</li>*/}
                <li className="mb-2"><strong>Email:</strong> <a href="mailto:teodor.baila@yahoo.com">teodor.baila@yahoo.com</a></li>
                <li className="mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/teodor-mihai-b%C4%83il%C4%83-41b9a0234/" target="_blank" rel="noreferrer">Teodor-Mihai Băilă</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/teobaila1" target="_blank" rel="noreferrer">@teobaila1</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
