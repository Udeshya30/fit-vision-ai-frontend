import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Onboarding.scss";

const Onboarding = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    age: "",
    weight: "",
    height: "",
    lifestyle: "sedentary",
    goal: "longevity",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/users/onboarding`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            age: Number(form.age),
            weight: Number(form.weight),
            height: Number(form.height),
            lifestyle: form.lifestyle,
            goal: form.goal,
          }),
        }
      );

      if (!res.ok) throw new Error();

      toast.success("Onboarding completed 🎉");
      navigate("/dashboard");
    } catch {
      toast.error("Please check your inputs");
    }
  };

  return (
    <div className="onboarding">
      <form className="onboarding-card" onSubmit={submit}>
        <h2>Tell us about yourself</h2>
        <p>This helps personalize your AI health guidance</p>

        <input
          type="number"
          placeholder="Age"
          name="age"
          required
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          name="weight"
          required
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          name="height"
          required
          onChange={handleChange}
        />

        <select name="lifestyle" onChange={handleChange}>
          <option value="sedentary">Sedentary</option>
          <option value="moderate">Moderately active</option>
          <option value="active">Very active</option>
        </select>

        <select name="goal" onChange={handleChange}>
          <option value="longevity">Longevity</option>
          <option value="fat_loss">Fat loss</option>
          <option value="energy">More energy</option>
          <option value="fitness">Better fitness</option>
        </select>

        <button className="btn-primary">Continue</button>
      </form>
    </div>
  );
};

export default Onboarding;
