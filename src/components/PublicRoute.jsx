import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // ⏳ wait until session check completes
  if (loading) return null;

  // ✅ already logged in → dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // ❌ not logged in → allow access
  return children;
};

export default PublicRoute;
