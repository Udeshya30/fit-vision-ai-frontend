// import "./Profile.scss";

// const Profile = () => {
//   return (
//     <div className="profile-page">
//       {/* HEADER */}
//       <header className="page-header">
//         <h1>Profile</h1>
//         <p>
//           Your personal health details help us personalize insights and
//           long-term recommendations.
//         </p>
//       </header>

//       <form className="profile-form">
//         {/* BODY INFO */}
//         <section className="profile-section">
//           <h3>Body Information</h3>

//           <div className="form-grid">
//             <div className="form-group">
//               <label>Age</label>
//               <input type="number" placeholder="Enter age" />
//             </div>

//             <div className="form-group">
//               <label>Weight (kg)</label>
//               <input type="number" placeholder="Enter weight" />
//             </div>

//             <div className="form-group">
//               <label>Height (cm)</label>
//               <input type="number" placeholder="Enter height" />
//             </div>
//           </div>
//         </section>

//         {/* LIFESTYLE */}
//         <section className="profile-section">
//           <h3>Lifestyle</h3>

//           <div className="form-group">
//             <label>Activity Level</label>
//             <select>
//               <option>Very Active</option>
//               <option>Moderately Active</option>
//               <option>Sedentary</option>
//             </select>
//             <small>
//               Used to personalize activity and recovery recommendations.
//             </small>
//           </div>
//         </section>

//         {/* GOAL */}
//         <section className="profile-section">
//           <h3>Primary Goal</h3>

//           <div className="form-group">
//             <label>Health Goal</label>
//             <select>
//               <option>Weight Loss</option>
//               <option>Muscle Gain</option>
//               <option>Longevity</option>
//             </select>
//             <small>
//               This helps us prioritize insights and AI recommendations.
//             </small>
//           </div>
//         </section>

//         {/* ACTION */}
//         <div className="profile-actions">
//           <button type="button" className="save-btn">
//             Save Changes
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Profile;

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import "./Profile.scss";

const Profile = () => {
  const { user, refreshUser } = useAuth();

  // Safely extract profile data
  const profile = user?.profile || user || {};

  const [form, setForm] = useState({
    age: "",
    weight: "",
    height: "",
    lifestyle: "",
    goal: "",
  });

  const [saving, setSaving] = useState(false);

  // Prefill from onboarding data
  useEffect(() => {
    if (!profile) return;

    setForm({
      age: profile.age || "",
      weight: profile.weight || "",
      height: profile.height || "",
      lifestyle: profile.lifestyle || "",
      goal: profile.goal || "",
    });
  }, [profile]);

  const update = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const saveProfile = async () => {
    try {
      setSaving(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/users/onboarding`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error();

      await refreshUser();

      toast.success("Profile updated successfully 💚");
    } catch {
      toast.error("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="profile-page">
      {/* HEADER */}
      <header className="page-header">
        <h1>Profile</h1>
        <p>
          Update your health details to keep recommendations accurate and
          personalized.
        </p>
      </header>

      <form className="profile-form" onSubmit={(e) => e.preventDefault()}>
        {/* BODY INFO */}
        <section className="profile-section">
          <h3>Body Information</h3>

          <div className="form-grid">
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                value={form.age}
                onChange={(e) => update("age", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Weight (kg)</label>
              <input
                type="number"
                value={form.weight}
                onChange={(e) => update("weight", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Height (cm)</label>
              <input
                type="number"
                value={form.height}
                onChange={(e) => update("height", e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* LIFESTYLE */}
        <section className="profile-section">
          <h3>Lifestyle</h3>

          <div className="form-group">
            <label>Activity Level</label>
            <select
              value={form.lifestyle}
              onChange={(e) => update("lifestyle", e.target.value)}
            >
              <option value="">Select</option>
              <option value="Sedentary">Sedentary</option>
              <option value="Moderately Active">Moderately Active</option>
              <option value="Very Active">Very Active</option>
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
            <select
              value={form.goal}
              onChange={(e) => update("goal", e.target.value)}
            >
              <option value="">Select</option>
              <option value="Live longer & healthier">Live longer & healthier</option>
              <option value="Lose weight sustainably">Lose weight sustainably</option>
              <option value="Improve fitness & energy">Improve fitness & energy</option>
            </select>

            <small>
              This helps us prioritize insights and AI recommendations.
            </small>
          </div>
        </section>

        {/* ACTION */}
        <div className="profile-actions">
          <button
            type="button"
            className="save-btn"
            onClick={saveProfile}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
