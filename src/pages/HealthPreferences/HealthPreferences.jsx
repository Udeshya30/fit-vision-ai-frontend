import "./HealthPreferences.scss";

const HealthPreferences = () => {
  return (
    <div className="health-preferences">
      <header className="page-header">
        <h1>Health Preferences</h1>
        <p>
          Share a few lifestyle details to help FitVisionAI personalize insights
          and recommendations.
        </p>
      </header>

      <form className="preferences-form">
        {/* DIET */}
        <section className="preferences-section">
          <h3>Diet Habits</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Diet Type</label>
              <select>
                <option>Mixed (Veg & Non-Veg)</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
              </select>
            </div>

            <div className="form-group">
              <label>Meals per day</label>
              <select>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>

            <div className="form-group">
              <label>Late-night eating</label>
              <select>
                <option>Rarely</option>
                <option>Sometimes</option>
                <option>Often</option>
              </select>
            </div>
          </div>
        </section>

        {/* SLEEP */}
        <section className="preferences-section">
          <h3>Sleep Habits</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Average sleep duration</label>
              <select>
                <option>Less than 6 hours</option>
                <option>6–7 hours</option>
                <option>7–8 hours</option>
                <option>More than 8 hours</option>
              </select>
            </div>

            <div className="form-group">
              <label>Typical bedtime</label>
              <input type="time" />
            </div>

            <div className="form-group">
              <label>Sleep consistency</label>
              <select>
                <option>Consistent</option>
                <option>Somewhat irregular</option>
                <option>Very irregular</option>
              </select>
            </div>
          </div>
        </section>

        {/* ACTIVITY */}
        <section className="preferences-section">
          <h3>Activity & Movement</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Exercise frequency</label>
              <select>
                <option>Rarely</option>
                <option>1–2 days/week</option>
                <option>3–4 days/week</option>
                <option>5+ days/week</option>
              </select>
            </div>

            <div className="form-group">
              <label>Preferred activity</label>
              <select>
                <option>Walking</option>
                <option>Gym / Strength</option>
                <option>Yoga / Mobility</option>
                <option>Mixed</option>
              </select>
            </div>

            <div className="form-group">
              <label>Desk / sedentary job</label>
              <select>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
        </section>

        <div className="preferences-actions">
          <button type="button" className="save-btn">
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
};

export default HealthPreferences;
