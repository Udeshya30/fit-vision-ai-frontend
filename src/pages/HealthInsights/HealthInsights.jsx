import {
  FiTrendingDown,
  FiActivity,
  FiMoon,
  FiArrowUpRight,
} from "react-icons/fi";
import "./HealthInsights.scss";

const HealthInsights = () => {
  return (
    <div className="health-insights">

      {/* HEADER */}
      <header className="page-header">
        <h1>Health Insights</h1>
        <p>
          AI-powered understanding of how your habits impact long-term health
          and longevity.
        </p>
      </header>

      {/* AI SUMMARY */}
      <section className="ai-summary">
        <h3>Overall Insight</h3>
        <p>
          Your health trajectory is positive. Consistent activity and gradual
          weight loss are improving metabolic health. Sleep regularity is the
          next biggest opportunity.
        </p>
      </section>

      {/* METRIC SNAPSHOTS */}
      <section className="metric-row">
        <div className="metric-card">
          <FiTrendingDown />
          <div>
            <span>Weight Trend</span>
            <strong>Improving</strong>
          </div>
        </div>

        <div className="metric-card">
          <FiActivity />
          <div>
            <span>Activity Level</span>
            <strong>Moderate</strong>
          </div>
        </div>

        <div className="metric-card">
          <FiMoon />
          <div>
            <span>Sleep Quality</span>
            <strong>Needs Focus</strong>
          </div>
        </div>
      </section>

      {/* INSIGHTS GRID */}
      <section className="insight-grid">
        <div className="insight-card">
          <h3>Weight Progress</h3>
          <p>
            Your weight is trending downward at a healthy pace. This reduces
            long-term cardiovascular and metabolic risk.
          </p>
          <span className="trend positive">
            <FiArrowUpRight /> Positive trend
          </span>
        </div>

        <div className="insight-card">
          <h3>Activity Pattern</h3>
          <p>
            Activity peaks during weekdays. Adding light movement on weekends
            can further improve insulin sensitivity.
          </p>
          <span className="trend neutral">
            <FiArrowUpRight /> Stable pattern
          </span>
        </div>

        <div className="insight-card">
          <h3>Sleep & Recovery</h3>
          <p>
            Irregular sleep timing may slow recovery. Consistent sleep schedules
            support hormone balance and longevity.
          </p>
          <span className="trend warning">
            <FiArrowUpRight /> Improvement needed
          </span>
        </div>

        <div className="insight-card highlight">
          <h3>AI Recommendation</h3>
          <p>
            Maintain daily movement, prioritize sleep consistency, and avoid
            extreme dieting. Small habits sustained over time yield the best
            longevity outcomes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HealthInsights;
