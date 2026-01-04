import "./Diet.scss";

const Diet = () => {
  return (
    <div className="diet-page">
      <header className="page-header">
        <h1>Diet & Nutrition</h1>
        <p>
          Understand how food choices affect energy, weight, and long-term
          health.
        </p>
      </header>

      <section className="diet-summary">
        <h3>AI Nutrition Insight</h3>
        <p>
          Your current lifestyle benefits from balanced meals with adequate
          protein and fiber. Consistent meal timing can further improve
          metabolic health.
        </p>
      </section>

      <section className="diet-grid">
        <div className="diet-card">
          <h4>Protein Intake</h4>
          <p>
            Adequate protein supports muscle, metabolism, and longevity.
          </p>
          <span className="hint">Focus on every meal</span>
        </div>

        <div className="diet-card">
          <h4>Carbohydrate Quality</h4>
          <p>
            Whole grains and vegetables improve energy stability.
          </p>
          <span className="hint">Limit refined sugars</span>
        </div>

        <div className="diet-card">
          <h4>Hydration</h4>
          <p>
            Proper hydration supports digestion and recovery.
          </p>
          <span className="hint">2–3 liters daily</span>
        </div>
      </section>
    </div>
  );
};

export default Diet;
