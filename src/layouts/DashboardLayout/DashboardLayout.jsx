import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import DashboardTopbar from "../../components/DashboardTopbar/DashboardTopbar";
import "./DashboardLayout.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <DashboardSidebar />
      <div className="dashboard-main">
        <DashboardTopbar />
        <div className="dashboard-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
