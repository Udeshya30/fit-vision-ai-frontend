const options = [
  { value: "sedentary", label: "Sedentary" },
  { value: "moderate", label: "Moderately Active" },
  { value: "active", label: "Very Active" },
];

const StepLifestyle = ({ value, onNext, onBack, onChange }) => {
  return (
    <>
      <h2>Your lifestyle</h2>
      <p>We adjust activity & recovery advice accordingly.</p>

      <div className="options">
        {options.map((o) => (
          <button
            key={o.value}
            className={value === o.value ? "active" : ""}
            onClick={() => onChange("lifestyle", o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="actions">
        <button className="ghost" onClick={onBack}>
          Back
        </button>
        <button disabled={!value} onClick={onNext}>
          Continue
        </button>
      </div>
    </>
  );
};

export default StepLifestyle;
