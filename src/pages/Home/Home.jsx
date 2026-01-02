import { Link } from "react-router-dom";
import {
  FiActivity,
  FiHeart,
  FiMoon,
  FiMessageSquare,
} from "react-icons/fi";
import "./Home.scss";
import ContactUs from "../../components/ContactUs/ContactUs";
import AIAssistantPreview from "../../components/AIAssistantPreview/AIAssistantPreview";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <main className="home">

      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <h1>
            Live Healthier.
            <br />
            <span>Longer.</span>
          </h1>

          <p className="hero-subtitle">
            FitVisionAI uses personalized intelligence to guide your diet,
            lifestyle, and daily habits — helping you improve long-term
            health and life expectancy.
          </p>

          <div className="hero-cta">
            <Link to="/signup" className="btn-primary">
              Get started free
            </Link>
            <a href="#assistant" className="btn-secondary">
              See how the AI works
            </a>
          </div>

          <p className="hero-trust">
            No credit card required • Privacy-first • AI-guided, not generic plans
          </p>
        </div>
      </section>

      {/* AI ASSISTANT PREVIEW */}
      <section className="home-chat" id="assistant">
        <h2 className="section-title">
          Your Personal AI Health Assistant
        </h2>

        <div className="chat-box">
          <div className="chat user">
            <FiMessageSquare />
            <span>
              What should I eat to improve my daily energy levels?
            </span>
          </div>

          <div className="chat ai">
            <FiHeart />
            <span>
              Based on your sleep pattern and activity level, your energy dips
              are likely caused by low protein intake and late meals.
              Try a high-protein breakfast and finish dinner before 8 PM.
            </span>
          </div>
        </div>
      </section>

      {/* CORE INTELLIGENCE */}
      <section className="home-pillars">
        <h2 className="section-title">
          How the AI Understands You
        </h2>

        <div className="pillars-grid">
          <div className="pillar-card">
            <FiActivity />
            <h5>Diet Intelligence</h5>
            <p>
              Nutrition guidance tailored to your habits, lifestyle,
              and long-term health goals — not generic meal plans.
            </p>
          </div>

          <div className="pillar-card">
            <FiMoon />
            <h5>Sleep Optimization</h5>
            <p>
              Identify sleep debt, recovery issues, and routines
              affecting your long-term wellbeing.
            </p>
          </div>

          <div className="pillar-card">
            <FiHeart />
            <h5>Lifestyle Risk Analysis</h5>
            <p>
              Detect patterns that may increase future health risks
              — before they become problems.
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="home-difference">
        <h2 className="section-title">
          Built for Longevity — Not Just Fitness
        </h2>

        <div className="difference-grid">
          <ul className="negative">
            <li>Calorie obsession</li>
            <li>Generic workout routines</li>
            <li>Short-term challenges</li>
          </ul>

          <ul className="positive">
            <li>Long-term health decisions</li>
            <li>Adaptive AI guidance</li>
            <li>Personalized lifestyle insights</li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-final">
        <h2>
          Make Better Health Decisions — Every Day
        </h2>
        <p>
          Your AI companion evolves as your body and lifestyle change.
        </p>
        <Link to="/signup" className="btn-primary">
          Create Free Account
        </Link>
      </section>

      <AIAssistantPreview />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;
