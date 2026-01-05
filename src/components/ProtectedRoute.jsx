import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AppLoader from "../components/AppLoader/AppLoader";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <AppLoader />; 
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
