import { Link } from "react-router-dom";
import {
  FiHome,
  FiActivity,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";
import "./DashboardSidebar.scss";

const DashboardSidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-brand">
        FitVision<span>AI</span>
      </div>

      <nav className="sidebar-nav">
        <Link to="/dashboard">
          <FiHome /> Overview
        </Link>
        <Link to="#">
          <FiActivity /> Health Insights
        </Link>
        <Link to="#">
          <FiMessageSquare /> AI Assistant
        </Link>
        <Link to="#">
          <FiUser /> Profile
        </Link>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
