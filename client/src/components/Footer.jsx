import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>JCS YACHTING</h3>
          <p>
            Premium yacht services delivering excellence,
            safety, and comfort at sea.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: operations@jcsyachting.mc</p>
          <p>Phone:+33 6 07 93 62 77 </p>
          <p>Address: 17 Avenue Albert II, 98000 Monaco</p>
          <p>Available 24/7</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} YP Yachting. All rights reserved.
      </div>
    </footer>
  );
}
