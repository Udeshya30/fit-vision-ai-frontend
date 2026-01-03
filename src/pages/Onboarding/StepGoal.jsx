const goals = [
  { value: "longevity", label: "Live longer & healthier" },
  { value: "weight_loss", label: "Lose weight sustainably" },
  { value: "fitness", label: "Improve fitness & energy" },
];

const StepGoal = ({ value, onBack, onSubmit, onChange }) => {
  return (
    <>
      <h2>Your primary goal</h2>
      <p>This helps us prioritize recommendations.</p>

      <div className="options">
        {goals.map((g) => (
          <button
            key={g.value}
            className={value === g.value ? "active" : ""}
            onClick={() => onChange("goal", g.value)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="actions">
        <button className="ghost" onClick={onBack}>
          Back
        </button>
        <button disabled={!value} onClick={onSubmit}>
          Finish
        </button>
      </div>
    </>
  );
};

export default StepGoal;
