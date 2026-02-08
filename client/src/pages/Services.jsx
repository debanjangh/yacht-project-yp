import "./Services.css";
import ServiceCard from "../components/ServiceCard";

export default function Services({ t }) {
  return (
    <section className="services-page">
      {/* Header */}
      <div className="services-header">
        <h1>{t.services.header}</h1>
        <p>{t.services.intro}</p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        <ServiceCard
          title={t.services.items.cleaning.title}
          description={t.services.items.cleaning.desc}
        />

        <ServiceCard
          title={t.services.items.crew.title}
          description={t.services.items.crew.desc}
        />

        <ServiceCard
          title={t.services.items.concierge.title}
          description={t.services.items.concierge.desc}
        />

        <ServiceCard
          title={t.services.items.maintenance.title}
          description={t.services.items.maintenance.desc}
        />

        <ServiceCard
          title={t.services.items.fuel.title}
          description={t.services.items.fuel.desc}
        />

        <ServiceCard
          title={t.services.items.port.title}
          description={t.services.items.port.desc}
        />
      </div>
    </section>
  );
}
