import FloatingAIAssistant from "../../components/FloatingAIAssistant/FloatingAIAssistant";
import "./AIAssistantPage.scss";

const AIAssistantPage = () => {
  return (
    <div className="ai-page">
      <header className="page-header">
        <h1>AI Assistant</h1>
        <p>Your personal guide for health, fitness, and longevity.</p>
      </header>

      <div className="ai-page-body">
        <p className="ai-hint">
          Ask questions about diet, exercise, sleep, or long-term health.
        </p>

        {/* Reuse same assistant */}
        <FloatingAIAssistant />
      </div>
    </div>
  );
};

export default AIAssistantPage;
