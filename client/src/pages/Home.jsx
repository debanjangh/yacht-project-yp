import "./Home.css";
import ServiceCard from "../components/ServiceCard";

export default function Home({ t }) {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero fade-up">
        <div className="hero-content">
          <h1>{t.home.heroTitle}</h1>
          <p>{t.home.heroSubtitle}</p>
        </div>
      </section>

      {/* SERVICES PREVIEW SECTION */}
      <section className="services-section fade-up">
        <h2>{t.home.expertiseTitle}</h2>

        <div className="services-grid">
          <ServiceCard
            title={t.home.services.agency}
            description={t.home.services.agencyDesc}
          />

          <ServiceCard
            title={t.home.services.management}
            description={t.home.services.managementDesc}
          />

          <ServiceCard
            title={t.home.services.concierge}
            description={t.home.services.conciergeDesc}
          />
        </div>
      </section>
    </>
  );
}

