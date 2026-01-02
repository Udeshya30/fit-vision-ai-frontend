import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-empty">
        <h2>Welcome to FitVisionAI</h2>
        <p>
          Your personalized health insights will appear here once you
          complete your profile.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
