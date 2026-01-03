import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard">

        {/* HEADER */}
        <section className="dashboard-header">
          <h1>
            Welcome back, <span>Udeshya</span> 👋
          </h1>
          <p>
            We’re helping you improve <strong>weight loss</strong>.
          </p>
        </section>

        {/* HEALTH SCORE */}
        <section className="health-score-card">
          <div className="score-ring">
            <div className="score-value">82</div>
            <div className="score-label">Health Score</div>
          </div>

          <div className="score-info">
            <h3>Great progress</h3>
            <p>
              Your health score is improving based on your lifestyle and
              activity trends.
            </p>
            <span className="score-hint">
              Based on diet, activity & sleep
            </span>
          </div>
        </section>

        {/* SNAPSHOT */}
        <section className="snapshot-grid">
          <div className="snapshot-card">
            <h4>Goal</h4>
            <p>Weight Loss</p>
          </div>

          <div className="snapshot-card">
            <h4>Lifestyle</h4>
            <p>Active</p>
          </div>

          <div className="snapshot-card">
            <h4>Weight</h4>
            <p>70 kg</p>
          </div>

          <div className="snapshot-card">
            <h4>Age</h4>
            <p>28</p>
          </div>
        </section>

        {/* TRENDS */}
        <section className="trends-card">
          <h3>Progress Overview</h3>
          <p>
            Weight and health trends will appear here once tracking is enabled.
          </p>

          <div className="trend-placeholder">
            📈 Chart coming soon
          </div>
        </section>

        {/* AI ASSISTANT */}
        <section className="ai-preview-card">
          <h3>AI Health Assistant</h3>
          <p>
            Ask questions about diet, workouts, sleep, or long-term health.
          </p>

          <div className="ai-suggestions">
            <span>What should I eat today?</span>
            <span>How can I burn fat faster?</span>
            <span>Improve my sleep quality</span>
          </div>

          <button className="ai-btn">
            Ask FitVisionAI
          </button>
        </section>

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
