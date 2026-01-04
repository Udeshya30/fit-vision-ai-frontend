import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile-page">
      {/* HEADER */}
      <header className="page-header">
        <h1>Profile</h1>
        <p>
          Your personal health details help us personalize insights and
          long-term recommendations.
        </p>
      </header>

      <form className="profile-form">
        {/* BODY INFO */}
        <section className="profile-section">
          <h3>Body Information</h3>

          <div className="form-grid">
            <div className="form-group">
              <label>Age</label>
              <input type="number" placeholder="Enter age" />
            </div>

            <div className="form-group">
              <label>Weight (kg)</label>
              <input type="number" placeholder="Enter weight" />
            </div>

            <div className="form-group">
              <label>Height (cm)</label>
              <input type="number" placeholder="Enter height" />
            </div>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="profile-section">
          <h3>Lifestyle</h3>

          <div className="form-group">
            <label>Activity Level</label>
            <select>
              <option>Very Active</option>
              <option>Moderately Active</option>
              <option>Sedentary</option>
            </select>
            <small>
              Used to personalize activity and recovery recommendations.
            </small>
          </div>
        </section>

        {/* GOAL */}
        <section className="profile-section">
          <h3>Primary Goal</h3>

          <div className="form-group">
            <label>Health Goal</label>
            <select>
              <option>Weight Loss</option>
              <option>Muscle Gain</option>
              <option>Longevity</option>
            </select>
            <small>
              This helps us prioritize insights and AI recommendations.
            </small>
          </div>
        </section>

        {/* ACTION */}
        <div className="profile-actions">
          <button type="button" className="save-btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
