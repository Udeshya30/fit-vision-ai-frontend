const StepBody = ({ height, weight, onNext, onBack, onChange }) => {
  return (
    <>
      <h2>Your body details</h2>
      <p>Used to calculate metabolic health & longevity.</p>

      <input
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => onChange("height", e.target.value)}
      />
      <input
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => onChange("weight", e.target.value)}
      />

      <div className="actions">
        <button className="ghost" onClick={onBack}>
          Back
        </button>
        <button disabled={!height || !weight} onClick={onNext}>
          Continue
        </button>
      </div>
    </>
  );
};

export default StepBody;
