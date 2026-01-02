// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import "./Navbar.scss";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="navbar">
//       <div className="navbar__container">
//         {/* BRAND */}
//         <Link to="/" className="navbar__brand">
//           FitVision<span>AI</span>
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="navbar__nav">
//           <Link to="/">Home</Link>
//           <a href="#features">Features</a>
//           <a href="#assistant">AI Assistant</a>
//           <a href="#contact">Contact Us</a>
//         </nav>

//         {/* MOBILE TOGGLE */}
//         <button
//           className="navbar__toggle"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           {open ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="navbar__mobile">
//           <Link to="/" onClick={() => setOpen(false)}>Home</Link>
//           <a href="#features" onClick={() => setOpen(false)}>Features</a>
//           <a href="#assistant" onClick={() => setOpen(false)}>AI Assistant</a>
//           <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LEFT */}
        <Link to="/" className="logo">
          FitVision<span>AI</span>
        </Link>

        {/* RIGHT (DESKTOP NAV) */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="#features">Features</a>
          <a href="#assistant">AI Assistant</a>
          <a href="#contact">Contact Us</a>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#assistant" onClick={() => setOpen(false)}>AI Assistant</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
