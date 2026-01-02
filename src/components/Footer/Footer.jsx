import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>
            FitVision<span>AI</span>
          </h3>
          <p>
            Smarter health decisions powered by personalized AI insights.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick links</h4>
          <Link to="/">Home</Link>
          <a href="#features">Features</a>
          <a href="#assistant">AI Assistant</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-meta">
          <h4>Contact</h4>
          <p>support@fitvisionai.com</p>
          <p>© {new Date().getFullYear()} FitVisionAI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
