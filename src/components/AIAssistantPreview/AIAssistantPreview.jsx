import "./AIAssistantPreview.scss";

const AIAssistantPreview = () => {
  return (
    <section className="ai-preview" id="assistant">
      <div className="ai-preview-inner">
        {/* LEFT */}
        <div className="ai-text">
          <h2>Your Personal AI Health Assistant</h2>
          <p>
            FitVisionAI understands your lifestyle, habits, and goals to give
            guidance that actually fits <strong>you</strong>.
          </p>

          <ul>
            <li>Personalized diet suggestions</li>
            <li>Lifestyle & longevity insights</li>
            <li>Daily habit recommendations</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="ai-chat">
          <div className="chat-bubble user">
            What should I eat to improve my energy levels?
          </div>

          <div className="chat-bubble ai">
            Based on your sleep pattern and activity level, increasing complex
            carbs and iron-rich foods can improve your energy. Try adding oats,
            spinach, and lentils to your meals.
          </div>

          <div className="chat-bubble user">
            How much should I walk daily?
          </div>

          <div className="chat-bubble ai">
            Walking 6,000–8,000 steps per day can significantly improve your
            cardiovascular health and longevity.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantPreview;
