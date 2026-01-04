import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile-page">
      <header className="page-header">
        <h1>Profile</h1>
        <p>Manage your personal health information.</p>
      </header>

      <form className="profile-form">
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

        <div className="form-group">
          <label>Lifestyle</label>
          <select>
            <option>Active</option>
            <option>Moderate</option>
            <option>Sedentary</option>
          </select>
        </div>

        <div className="form-group">
          <label>Goal</label>
          <select>
            <option>Weight Loss</option>
            <option>Muscle Gain</option>
            <option>Longevity</option>
          </select>
        </div>

        <button type="button" className="save-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
