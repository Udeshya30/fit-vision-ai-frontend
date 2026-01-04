import "./Sleep.scss";

const Sleep = () => {
  return (
    <div className="sleep-page">
      <header className="page-header">
        <h1>Sleep & Recovery</h1>
        <p>
          Sleep consistency is one of the strongest predictors of long-term
          health.
        </p>
      </header>

      <section className="sleep-summary">
        <h3>AI Sleep Insight</h3>
        <p>
          Irregular sleep timing may slow recovery and fat loss. Consistent
          bedtimes improve hormonal balance and longevity.
        </p>
      </section>

      <section className="sleep-grid">
        <div className="sleep-card">
          <h4>Sleep Duration</h4>
          <p>7–9 hours supports optimal recovery.</p>
        </div>

        <div className="sleep-card">
          <h4>Sleep Consistency</h4>
          <p>Regular timing improves metabolic health.</p>
        </div>

        <div className="sleep-card">
          <h4>Recovery Quality</h4>
          <p>Good sleep enhances exercise adaptation.</p>
        </div>
      </section>
    </div>
  );
};

export default Sleep;
