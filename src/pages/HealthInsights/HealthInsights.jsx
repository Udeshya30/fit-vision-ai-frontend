import "./HealthInsights.scss";

const HealthInsights = () => {
  return (
    <div className="health-insights">
      <header className="page-header">
        <h1>Health Insights</h1>
        <p>Understand how your habits affect long-term health and longevity.</p>
      </header>

      <section className="insight-grid">
        <div className="insight-card">
          <h3>Weight Progress</h3>
          <p>
            Your weight trend shows steady improvement. Consistency matters more
            than speed for sustainable fat loss.
          </p>
        </div>

        <div className="insight-card">
          <h3>Activity Pattern</h3>
          <p>
            You are most active mid-week. Adding light activity on weekends can
            improve metabolic balance.
          </p>
        </div>

        <div className="insight-card">
          <h3>Sleep & Recovery</h3>
          <p>
            Regular sleep timing improves recovery and hormonal balance, directly
            impacting longevity.
          </p>
        </div>

        <div className="insight-card highlight">
          <h3>Key Recommendation</h3>
          <p>
            Focus on maintaining daily movement and consistent sleep rather than
            extreme workouts.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HealthInsights;
