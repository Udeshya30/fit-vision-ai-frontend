import { useState } from "react";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import "./HealthPreferences.scss";

const HealthPreferences = () => {
  const [form, setForm] = useState({
    dietType: "",
    mealsPerDay: "",
    lateNightEating: "",
    sleepDuration: "",
    sleepConsistency: "",
    exerciseFrequency: "",
    preferredActivity: "",
    sedentaryJob: "",
    bedtime: "",
  });

  const update = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  // OPTIONS
  const dietOptions = ["Mixed (Veg & Non-Veg)", "Vegetarian", "Vegan"];
  const mealsOptions = ["2", "3", "4+"];
  const lateNightOptions = ["Rarely", "Sometimes", "Often"];

  const sleepDurationOptions = [
    "Less than 6 hours",
    "6–7 hours",
    "7–8 hours",
    "More than 8 hours",
  ];
  const sleepConsistencyOptions = [
    "Consistent",
    "Somewhat irregular",
    "Very irregular",
  ];

  const exerciseOptions = [
    "Rarely",
    "1–2 days/week",
    "3–4 days/week",
    "5+ days/week",
  ];
  const activityOptions = [
    "Walking",
    "Gym / Strength",
    "Yoga / Mobility",
    "Mixed",
  ];
  const sedentaryOptions = ["Yes", "No"];

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
              <CustomSelect
                value={form.dietType}
                placeholder="Select diet"
                options={dietOptions}
                onChange={(val) => update("dietType", val)}
              />
            </div>

            <div className="form-group">
              <label>Meals per day</label>
              <CustomSelect
                value={form.mealsPerDay}
                placeholder="Select"
                options={mealsOptions}
                onChange={(val) => update("mealsPerDay", val)}
              />
            </div>

            <div className="form-group">
              <label>Late-night eating</label>
              <CustomSelect
                value={form.lateNightEating}
                placeholder="Select"
                options={lateNightOptions}
                onChange={(val) => update("lateNightEating", val)}
              />
            </div>
          </div>
        </section>

        {/* SLEEP */}
        <section className="preferences-section">
          <h3>Sleep Habits</h3>

          <div className="form-grid">
            <div className="form-group">
              <label>Average sleep duration</label>
              <CustomSelect
                value={form.sleepDuration}
                placeholder="Select"
                options={sleepDurationOptions}
                onChange={(val) => update("sleepDuration", val)}
              />
            </div>

            <div className="form-group">
              <label>Typical bedtime</label>
              <input
                type="time"
                value={form.bedtime}
                onChange={(e) => update("bedtime", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Sleep consistency</label>
              <CustomSelect
                value={form.sleepConsistency}
                placeholder="Select"
                options={sleepConsistencyOptions}
                onChange={(val) => update("sleepConsistency", val)}
              />
            </div>
          </div>
        </section>

        {/* ACTIVITY */}
        <section className="preferences-section">
          <h3>Activity & Movement</h3>

          <div className="form-grid">
            <div className="form-group">
              <label>Exercise frequency</label>
              <CustomSelect
                value={form.exerciseFrequency}
                placeholder="Select"
                options={exerciseOptions}
                onChange={(val) => update("exerciseFrequency", val)}
              />
            </div>

            <div className="form-group">
              <label>Preferred activity</label>
              <CustomSelect
                value={form.preferredActivity}
                placeholder="Select"
                options={activityOptions}
                onChange={(val) => update("preferredActivity", val)}
              />
            </div>

            <div className="form-group">
              <label>Desk / sedentary job</label>
              <CustomSelect
                value={form.sedentaryJob}
                placeholder="Select"
                options={sedentaryOptions}
                onChange={(val) => update("sedentaryJob", val)}
              />
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
