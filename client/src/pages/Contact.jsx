import "./Contact.css";
import { useState } from "react";

export default function Contact({ t }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t.contact.status.sending);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(t.contact.status.success);
        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setStatus(data.message || t.contact.status.error);
      }
    } catch (err) {
      setStatus(t.contact.status.serverError);
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>{t.contact.header}</h1>
        <p>{t.contact.subheader}</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>{t.contact.form.name}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>{t.contact.form.email}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>{t.contact.form.service}</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">
              {t.contact.form.selectPlaceholder}
            </option>
            <option>{t.contact.services.cleaning}</option>
            <option>{t.contact.services.crew}</option>
            <option>{t.contact.services.concierge}</option>
            <option>{t.contact.services.maintenance}</option>
            <option>{t.contact.services.fuel}</option>
            <option>{t.contact.services.port}</option>
          </select>
        </div>

        <div className="form-group">
          <label>{t.contact.form.message}</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="contact-btn">
          {t.contact.form.submit}
        </button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}
