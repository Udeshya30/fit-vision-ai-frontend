// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Signup from "./pages/Signup/Signup";
// import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword/ResetPassword";
// import Dashboard from "./pages/Dashboard/Dashboard";

// import Navbar from "./components/Navbar/Navbar";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;



import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Dashboard from "./pages/Dashboard/Dashboard";

import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* MARKETING PAGES (Navbar visible) */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        {/* AUTH PAGES (NO Navbar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* APP PAGES (Dashboard – navbar later) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
