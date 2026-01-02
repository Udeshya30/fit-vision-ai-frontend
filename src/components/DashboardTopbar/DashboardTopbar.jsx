import { FiBell } from "react-icons/fi";
import "./DashboardTopbar.scss";

const DashboardTopbar = () => {
  return (
    <header className="dashboard-topbar">
      <h4>Dashboard</h4>

      <div className="topbar-actions">
        <FiBell />
        <div className="avatar">U</div>
      </div>
    </header>
  );
};

export default DashboardTopbar;
