import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ lang, setLang, t }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="nav-logo">JCS YACHTING</span>

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

      {/* Language Toggle */}
      <button
        className="lang-toggle"
        onClick={() => setLang(lang === "en" ? "fr" : "en")}
      >
        {lang === "en" ? "FR" : "EN"}
      </button>
    </nav>
  );
}
