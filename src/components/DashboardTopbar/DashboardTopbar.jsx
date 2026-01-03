import { FiBell, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./DashboardTopbar.scss";

const DashboardTopbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="dashboard-topbar">
      <h4>Dashboard</h4>

      <div className="topbar-actions">
        <FiBell />

        <div className="avatar">
          {user?.profile?.name?.charAt(0)?.toUpperCase() || "U"}
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut />
        </button>
      </div>
    </header>
  );
};

export default DashboardTopbar;
