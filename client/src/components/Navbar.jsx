import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ lang, setLang, t }) {
  const languages = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "it", label: "IT" },
    { code: "ar", label: "AR" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* Logo + Language Toggle */}
        <div className="logo-block">
          <span className="nav-logo">JCS YACHTING</span>

          <div className="lang-toggle under-logo">
            {languages.map((l) => (
              <button
                key={l.code}
                className={`lang-btn ${lang === l.code ? "active" : ""}`}
                onClick={() => setLang(l.code)}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              {t.nav.home}
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              {t.nav.about}
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">
              {t.nav.services}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              {t.nav.contact}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
