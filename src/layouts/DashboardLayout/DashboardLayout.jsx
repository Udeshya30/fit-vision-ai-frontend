import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import DashboardTopbar from "../../components/DashboardTopbar/DashboardTopbar";
import "./DashboardLayout.scss";
import AppLoader from "../../components/AppLoader/AppLoader";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <DashboardSidebar />

      <div className="dashboard-main">
        <DashboardTopbar />
        <AppLoader />
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
