"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    objective: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      objective: "",
    });

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact">
      <div className="contact-bg-text" aria-hidden="true">
        GROW
      </div>
      <div className="contact-inner">
        <div className="contact-head reveal">
          <span className="eyebrow">Book a Call</span>
          <h2 className="ch">
            Let&apos;s make
            <br />
            <em>something</em>
            <br />
            the world sees.
          </h2>
        </div>

        <form
          id="cform"
          className="reveal"
          style={{ "--d": ".2s" } as React.CSSProperties}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="fg-row">
            <div className="fg">
              <input
                id="c-name"
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="fg">
              <input
                id="c-email"
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="fg-row">
            <div className="fg">
              <input
                id="c-co"
                type="text"
                name="company"
                placeholder="Company *"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="fg">
              <input
                id="c-web"
                type="url"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="fg full">
            <textarea
              id="c-msg"
              name="objective"
              placeholder="Your challenge or objective *"
              rows={3}
              value={formData.objective}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn mag-btn" id="sbtn">
            <span id="sbtn-txt">{sent ? "Sent ✓" : "Send It ↗"}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
