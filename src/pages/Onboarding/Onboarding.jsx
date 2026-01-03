import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Onboarding.scss";

import StepAge from "./StepAge";
import StepBody from "./StepBody";
import StepLifestyle from "./StepLifestyle";
import StepGoal from "./StepGoal";

const TOTAL_STEPS = 4;

const Onboarding = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    age: "",
    height: "",
    weight: "",
    lifestyle: "",
    goal: "",
  });

  const update = (key, value) =>
    setForm((p) => ({ ...p, [key]: value }));

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const submit = async () => {
    try {
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

      toast.success("Welcome to FitVisionAI 💚");
      navigate("/dashboard");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="onboarding">
      {/* PROGRESS */}
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      {/* CARD */}
      <div className="onboarding-card">
        {step === 1 && (
          <StepAge value={form.age} onNext={next} onChange={update} />
        )}
        {step === 2 && (
          <StepBody
            height={form.height}
            weight={form.weight}
            onNext={next}
            onBack={back}
            onChange={update}
          />
        )}
        {step === 3 && (
          <StepLifestyle
            value={form.lifestyle}
            onNext={next}
            onBack={back}
            onChange={update}
          />
        )}
        {step === 4 && (
          <StepGoal
            value={form.goal}
            onBack={back}
            onSubmit={submit}
            onChange={update}
          />
        )}
      </div>
    </div>
  );
};

export default Onboarding;
