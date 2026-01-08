import { Link } from "react-router-dom";
import {
  FiActivity,
  FiHeart,
  FiMoon,
  FiMessageSquare,
  FiTrendingUp,
  FiUser,
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
            <a href="#features" className="btn-secondary">
              Explore features
            </a>
          </div>

          <p className="hero-trust">
            No credit card required • Privacy-first • AI-guided, not generic plans
          </p>
        </div>
      </section>

      {/* AI INTELLIGENCE */}
      <section className="home-intelligence" id="intelligence">
        <h2 className="section-title">Your Personal AI Health Assistant</h2>

        <p className="section-subtitle">
          FitVisionAI continuously learns from your health data to provide
          guidance that adapts as your body and lifestyle change.
        </p>

        <div className="intelligence-grid">
          <div className="intelligence-card">
            <div className="icon-wrapper">
              <FiUser />
            </div>
            <h4>Understands Your Body</h4>
            <p>
              Uses your age, height, weight, lifestyle, and goals to
              build a personalized health profile.
            </p>
          </div>

          <div className="intelligence-card">
            <div className="icon-wrapper">
              <FiActivity />
            </div>
            <h4>Connects Daily Signals</h4>
            <p>
              Analyzes sleep patterns, diet habits, activity levels,
              and recovery trends — not isolated metrics.
            </p>
          </div>

          <div className="intelligence-card">
            <div className="icon-wrapper">
              <FiTrendingUp />
            </div>
            <h4>Evolves Over Time</h4>
            <p>
              Recommendations adjust automatically as your habits,
              progress, and health patterns evolve.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THE AI HELPS YOU WITH */}
      <section className="home-conversations">
        <h2 className="section-title">What the AI Helps You With</h2>

        <p className="section-subtitle">
          Personalized guidance based on how your body responds to
          sleep, nutrition, activity, and lifestyle habits.
        </p>

        <div className="conversation-grid">
          <div className="conversation-card">
            <div className="conversation-question">
              <span className="icon user">
                <FiMessageSquare />
              </span>
              <p>Why am I feeling tired even after sleeping 7 hours?</p>
            </div>

            <div className="conversation-answer">
              <span className="icon ai">
                <FiMoon />
              </span>
              <p>
                Your sleep duration is sufficient, but irregular bedtimes
                and late meals are reducing sleep quality. Shifting dinner
                earlier and maintaining a fixed sleep window can improve recovery.
              </p>
            </div>
          </div>

          <div className="conversation-card">
            <div className="conversation-question">
              <span className="icon user">
                <FiMessageSquare />
              </span>
              <p>What should I focus on to lose weight sustainably?</p>
            </div>

            <div className="conversation-answer">
              <span className="icon ai">
                <FiHeart />
              </span>
              <p>
                Based on your activity level and metabolism, prioritizing
                protein intake, sleep consistency, and gradual habit changes
                is more effective than aggressive calorie restriction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE INTELLIGENCE */}
      <section className="home-pillars" id="features">
        <h2 className="section-title">How the AI Understands You</h2>

        <div className="pillars-grid">
          <div className="pillar-card">
            <FiActivity />
            <h5>Diet Intelligence</h5>
            <p>
              Nutrition guidance tailored to your habits, lifestyle,
              and long-term health goals.
            </p>
          </div>

          <div className="pillar-card">
            <FiMoon />
            <h5>Sleep Optimization</h5>
            <p>
              Identify sleep debt, recovery issues, and routines
              affecting long-term wellbeing.
            </p>
          </div>

          <div className="pillar-card">
            <FiHeart />
            <h5>Lifestyle Risk Analysis</h5>
            <p>
              Detect patterns that may increase future health risks
              before they become problems.
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
        <h2>Make Better Health Decisions — Every Day</h2>
        <p>Your AI companion evolves as your body and lifestyle change.</p>
        <Link to="/signup" className="btn-primary">
          Create free account
        </Link>
      </section>

      <AIAssistantPreview />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;
