import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { FaCircleCheck } from "react-icons/fa6";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
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

  // Dropdown options
  const lifestyleOptions = [
    "Sedentary",
    "Moderately Active",
    "Very Active",
  ];

  const goalOptions = [
    "Live longer & healthier",
    "Lose weight sustainably",
    "Improve fitness & energy",
  ];

  // Prefill form from profile
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

      toast.success("Profile updated successfully", {
        icon: <FaCircleCheck />,
      });
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
        {/* BODY INFORMATION */}
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

            <CustomSelect
              value={form.lifestyle}
              placeholder="Select"
              options={lifestyleOptions}
              onChange={(val) => update("lifestyle", val)}
            />

            <small>
              Used to personalize activity and recovery recommendations.
            </small>
          </div>
        </section>

        {/* PRIMARY GOAL */}
        <section className="profile-section">
          <h3>Primary Goal</h3>

          <div className="form-group">
            <label>Health Goal</label>

            <CustomSelect
              value={form.goal}
              placeholder="Select"
              options={goalOptions}
              onChange={(val) => update("goal", val)}
            />

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
