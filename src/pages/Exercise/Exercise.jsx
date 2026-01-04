import "./Exercise.scss";

const Exercise = () => {
  return (
    <div className="exercise-page">
      <header className="page-header">
        <h1>Exercise & Movement</h1>
        <p>
          Regular movement improves energy, mood, and long-term health.
        </p>
      </header>

      <section className="exercise-summary">
        <h3>AI Movement Insight</h3>
        <p>
          Moderate daily activity combined with strength training supports
          longevity more than intense workouts alone.
        </p>
      </section>

      <section className="exercise-grid">
        <div className="exercise-card">
          <h4>Daily Movement</h4>
          <p>Walking and light activity reduce sedentary risk.</p>
        </div>

        <div className="exercise-card">
          <h4>Strength Training</h4>
          <p>Preserves muscle and metabolic health.</p>
        </div>

        <div className="exercise-card">
          <h4>Cardio Balance</h4>
          <p>Supports heart health and endurance.</p>
        </div>
      </section>
    </div>
  );
};

export default Exercise;
