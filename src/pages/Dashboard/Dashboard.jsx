import { useAuth } from "../../context/AuthContext";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import "./Dashboard.scss";

const Dashboard = () => {
  const { user } = useAuth();

  const name = user?.profile?.name || "there";
  const goal = user?.profile?.goal || "your health";
  const lifestyle = user?.profile?.lifestyle || "—";

  return (
    <DashboardLayout>
      <div className="dashboard">
        {/* HEADER */}
        <div className="dashboard-header">
          <h1>Welcome back, {name} 👋</h1>
          <p>
            We’re helping you improve{" "}
            <strong>{goal.replace("_", " ")}</strong> through smarter daily
            decisions.
          </p>
        </div>

        {/* GRID */}
        <div className="dashboard-grid">
          <div className="card highlight">
            <h3>Health Score</h3>
            <div className="score">—</div>
            <p className="muted">
              Your personalized health score will appear here once AI analysis
              is enabled.
            </p>
          </div>

          <div className="card">
            <h3>Lifestyle Snapshot</h3>
            <ul>
              <li>
                <strong>Goal:</strong> {goal.replace("_", " ")}
              </li>
              <li>
                <strong>Lifestyle:</strong> {lifestyle}
              </li>
            </ul>
          </div>

          <div className="card wide">
            <h3>AI Health Assistant</h3>
            <p className="muted">
              Ask questions about diet, sleep, workouts, or longevity.
            </p>
            <div className="ai-preview">
              “What should I eat to feel more energetic?”
            </div>
            <button className="btn-primary" disabled>
              Coming Soon
            </button>
          </div>

          <div className="card">
            <h3>Insights</h3>
            <p className="muted">
              Personalized insights based on your habits will appear here.
            </p>
          </div>

          <div className="card">
            <h3>Daily Activity</h3>
            <p className="muted">
              Track consistency and small daily improvements.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
