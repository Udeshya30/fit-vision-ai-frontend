import { Link } from "react-router-dom";
import {
  FiHome,
  FiActivity,
  FiCoffee,
  FiMoon,
  FiMessageSquare,
  FiUser,
  FiTrendingUp,
  FiHeart,
} from "react-icons/fi";
import "./DashboardSidebar.scss";

const DashboardSidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-brand">
        FitVision<span>AI</span>
      </div>

      <nav className="sidebar-nav">
        <Link to="/dashboard"><FiHome /> Overview</Link>
        <Link to="/dashboard/insights"><FiActivity /> Health Insights</Link>
        <Link to="/dashboard/diet"><FiCoffee /> Diet & Nutrition</Link>
        <Link to="/dashboard/sleep"><FiMoon /> Sleep & Recovery</Link>
        <Link to="/dashboard/exercise"><FiTrendingUp /> Exercise & Movement</Link>
        <Link to="/dashboard/preferences"><FiHeart /> Health Preferences</Link>
        <Link to="/dashboard/assistant"><FiMessageSquare /> AI Assistant</Link>
        <Link to="/dashboard/profile"><FiUser /> Profile</Link>



      </nav>
    </aside>
  );
};

export default DashboardSidebar;
