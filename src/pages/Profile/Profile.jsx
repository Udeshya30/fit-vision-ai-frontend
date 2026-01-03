import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { updateProfile } from "../../services/authService";
import toast from "react-hot-toast";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";

const Profile = () => {
  const { user, refreshUser } = useAuth();
  const [form, setForm] = useState(user.profile);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const save = async () => {
    try {
      await updateProfile(form);
      await refreshUser();
      toast.success("Profile updated");
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <DashboardLayout>
      <h2>Profile</h2>

      <input name="age" value={form.age || ""} onChange={handleChange} />
      <input name="weight" value={form.weight || ""} onChange={handleChange} />
      <select
        name="lifestyle"
        value={form.lifestyle || ""}
        onChange={handleChange}
      >
        <option value="">Lifestyle</option>
        <option value="sedentary">Sedentary</option>
        <option value="moderate">Moderate</option>
        <option value="active">Active</option>
      </select>

      <button onClick={save}>Save</button>
    </DashboardLayout>
  );
};

export default Profile;
