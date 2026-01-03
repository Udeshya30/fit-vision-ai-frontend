// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FiMail, FiLock } from "react-icons/fi";
// import { FcGoogle } from "react-icons/fc";
// import { loginUser } from "../../services/authService";
// import "./Login.scss";
// import toast from "react-hot-toast";


// const slides = [
//   {
//     title: "Welcome Back",
//     text: "Your personalized AI health companion is ready to guide you.",
//     image: "https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg",
//   },
//   {
//     title: "Smarter Health Decisions",
//     text: "Continue your journey with insights tailored just for you.",
//     image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
//   },
//   {
//     title: "Consistency Builds Results",
//     text: "Small daily actions guided by AI lead to long-term wellbeing.",
//     image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
//   },
// ];

// const Login = () => {
//   const navigate = useNavigate();

//   const [index, setIndex] = useState(0);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setIndex((i) => (i + 1) % slides.length),
//       5000
//     );
//     return () => clearInterval(interval);
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await loginUser({
//         email,
//         password,
//       });

//       toast.success("Welcome back 👋");
//       navigate("/dashboard");
//     } catch (err) {
//       toast.error(err.message || "Login failed");
//     }
//   };


//   return (
//     <div className="login">
//       {/* LEFT – CAROUSEL */}
//       <div
//         className="login__left"
//         style={{ backgroundImage: `url(${slides[index].image})` }}
//       >
//         <div className="login__overlay">
//           <h1>{slides[index].title}</h1>
//           <p>{slides[index].text}</p>

//           <div className="login__dots">
//             {slides.map((_, i) => (
//               <span
//                 key={i}
//                 className={i === index ? "active" : ""}
//                 onClick={() => setIndex(i)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* RIGHT – FORM */}
//       <div className="login__right">
//         <div className="login__card">
//           <h2>Sign in to your account</h2>

//           <form onSubmit={handleSubmit} noValidate>
//             <div className="field">
//               <FiMail />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="field">
//               <FiLock />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="login__options">
//               <Link to="/forgot-password">Forgot password?</Link>
//             </div>

//             {error && <p className="error-text">{error}</p>}

//             <button className="btn-primary" disabled={loading}>
//               {loading ? "Signing in..." : "Sign In"}
//             </button>
//           </form>

//           <div className="divider">
//             <span>or</span>
//           </div>

//           <button className="google-btn" type="button">
//             <FcGoogle />
//             Sign in with Google
//           </button>

//           <p className="redirect">
//             Don’t have an account? <Link to="/signup">Create one</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

import { loginUser } from "../../services/authService";
import "./Login.scss";

const slides = [
  {
    title: "Welcome Back",
    text: "Your personalized AI health companion is ready to guide you.",
    image:
      "https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg",
  },
  {
    title: "Smarter Health Decisions",
    text: "Continue your journey with insights tailored just for you.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
  },
  {
    title: "Consistency Builds Results",
    text: "Small daily actions guided by AI lead to long-term wellbeing.",
    image:
      "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
  },
];

const Login = () => {
  const navigate = useNavigate();

  // ✅ REQUIRED STATE (THIS WAS MISSING)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // carousel
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      await loginUser({ email, password });
      toast.success("Welcome back 👋");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <div className="login">
      {/* LEFT – CAROUSEL */}
      <div
        className="login__left"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      >
        <div className="login__overlay">
          <h1>{slides[index].title}</h1>
          <p>{slides[index].text}</p>

          <div className="login__dots">
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
      <div className="login__right">
        <div className="login__card">
          <h2>Sign in to your account</h2>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <FiMail />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <FiLock />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="login__options">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" className="btn-primary">
              Sign In
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button className="google-btn" disabled>
            <FcGoogle />
            Sign in with Google
          </button>

          <p className="redirect">
            Don’t have an account? <Link to="/signup">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
