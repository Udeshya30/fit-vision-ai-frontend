import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { signupUser, saveToken } from "../../services/authService";
import "./Signup.scss";

const slides = [
  {
    title: "Personalized Nutrition",
    text: "AI-powered diet guidance based on your lifestyle, habits, and goals.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
  {
    title: "Smart Fitness Insights",
    text: "Activity and workout suggestions that adapt to your routine.",
    image: "https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg",
  },
  {
    title: "Your AI Health Companion",
    text: "Ask questions and get personalized guidance anytime.",
    image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
  },
];

const Signup = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await signupUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      saveToken(res.access_token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

          <form onSubmit={handleSubmit} noValidate>
            <div className="field">
              <FiUser />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <FiMail />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <FiLock />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <FiLock />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="error-text">{error}</p>}

            <button className="btn-primary" disabled={loading}>
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button className="google-btn" type="button">
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
