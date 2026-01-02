// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FiMail, FiLock } from "react-icons/fi";
// import { FcGoogle } from "react-icons/fc";
// import "./Login.scss";

// const slides = [
//   {
//     title: "Welcome Back",
//     text: "Your personalized AI health companion is ready to guide you.",
//     image:
//       "https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg",
//   },
//   {
//     title: "Smarter Health Decisions",
//     text: "Continue your journey with insights tailored just for you.",
//     image:
//       "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
//   },
//   {
//     title: "Consistency Builds Results",
//     text: "Small daily actions guided by AI lead to long-term wellbeing.",
//     image:
//       "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
//   },
// ];

// const Login = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setIndex((i) => (i + 1) % slides.length),
//       5000
//     );
//     return () => clearInterval(interval);
//   }, []);

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

//           <form>
//             <div className="field">
//               <FiMail />
//               <input type="email" placeholder="Email Address" />
//             </div>

//             <div className="field">
//               <FiLock />
//               <input type="password" placeholder="Password" />
//             </div>

//             <div className="login__options">
//               <Link to="/forgot-password">Forgot password?</Link>
//             </div>

//             <button className="btn-primary">
//               Sign In
//             </button>
//           </form>

//           <div className="divider">
//             <span>or</span>
//           </div>

//           <button className="google-btn">
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
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login">
      {/* LEFT – CAROUSEL */}
      <div
        className="login__left"
        style={{ "--bg": `url(${slides[index].image})` }}
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
                onMouseDown={(e) => e.preventDefault()}
              />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT – FORM */}
      <div className="login__right">
        <div className="login__card">
          <h2>Sign in to your account</h2>

          <form>
            <div className="field">
              <FiMail />
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="field">
              <FiLock />
              <input type="password" placeholder="Password" />
            </div>

            <div className="login__options">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button className="btn-primary">
              Sign In
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <button className="google-btn">
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
