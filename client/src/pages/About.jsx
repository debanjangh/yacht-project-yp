import "./About.css";
import aboutImage from "../assets/images/about pic.png";

export default function About({ t }) {
  return (
    <section className="about-page">
      {/* Header */}
      <div className="about-header">
        <h1>{t.about.header}</h1>
      </div>

      {/* Main Content */}
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-image">
          <img
            src={aboutImage}
            alt={t.about.imageAlt}
            className="about-img"
          />
        </div>

        {/* Right: Text Content */}
        <div className="about-content">
          <span className="about-label">{t.about.label}</span>

          <h2>{t.about.title}</h2>

          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </div>
    </section>
  );
}
