import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* PUBLIC / MARKETING */
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

/* APP PAGES */
import Dashboard from "./pages/Dashboard/Dashboard";
import HealthInsights from "./pages/HealthInsights/HealthInsights";
import Diet from "./pages/Diet/Diet";
import Sleep from "./pages/Sleep/Sleep";
import Exercise from "./pages/Exercise/Exercise";
import HealthPreferences from "./pages/HealthPreferences/HealthPreferences";
import AIAssistantPage from "./pages/AIAssistantPage/AIAssistantPage";
import Profile from "./pages/Profile/Profile";
import Onboarding from "./pages/Onboarding/Onboarding";

/* LAYOUTS & ROUTE GUARDS */
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

/* COMPONENTS */
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= MARKETING ================= */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        {/* ================= AUTH (PUBLIC ONLY) ================= */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />

        <Route
          path="/forgot-password"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />

        <Route
          path="/reset-password/:token"
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />

        {/* ================= ONBOARDING (PROTECTED) ================= */}
        <Route
          path="/onboarding"
          element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          }
        />

        {/* ================= DASHBOARD (PROTECTED + NESTED) ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="insights" element={<HealthInsights />} />
          <Route path="diet" element={<Diet />} />
          <Route path="sleep" element={<Sleep />} />
          <Route path="exercise" element={<Exercise />} />
          <Route path="preferences" element={<HealthPreferences />} />
          <Route path="assistant" element={<AIAssistantPage />} />
          <Route path="profile" element={<Profile />} />

        </Route>

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
