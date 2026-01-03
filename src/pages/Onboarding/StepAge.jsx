const StepAge = ({ value, onNext, onChange }) => {
  return (
    <>
      <h2>How old are you?</h2>
      <p>This helps us personalize your health insights.</p>

      <input
        type="number"
        placeholder="Age"
        value={value}
        onChange={(e) => onChange("age", e.target.value)}
      />

      <button disabled={!value} onClick={onNext}>
        Continue
      </button>
    </>
  );
};

export default StepAge;
