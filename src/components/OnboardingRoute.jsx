import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const OnboardingRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.onboarding_completed) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default OnboardingRoute;
