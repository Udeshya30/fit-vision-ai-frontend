import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import "./Signup.scss";

const slides = [
  {
    title: "Personalized Nutrition",
    text: "AI-powered diet guidance based on your lifestyle, habits, and goals.",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    title: "Smart Fitness Insights",
    text: "Activity and workout suggestions that adapt to your routine.",
    image:
      "https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg",
  },
  {
    title: "Your AI Health Companion",
    text: "Ask questions and get personalized guidance anytime.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
  },
];

const Signup = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="signup">
      {/* LEFT – CAROUSEL */}
      <div
        className="signup__left"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      >
        <div className="signup__overlay">
          <h1>{slides[index].title}</h1>
          <p>{slides[index].text}</p>

          <div className="signup__dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT – FORM */}
      <div className="signup__right">
        <div className="signup__card">
          <h2>Create your account</h2>

          <form>
            <div className="field">
              <FiUser />
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="field">
              <FiMail />
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="field">
              <FiLock />
              <input type="password" placeholder="Password" />
            </div>

            <div className="field">
              <FiLock />
              <input type="password" placeholder="Confirm Password" />
            </div>

            <button className="btn-primary">
              Create Account
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button className="google-btn">
            <FcGoogle />
            Sign up with Google
          </button>

          <p className="redirect">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
