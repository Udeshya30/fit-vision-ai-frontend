import { useState } from "react";
import {
  FiMessageSquare,
  FiX,
  FiSend,
} from "react-icons/fi";
import "./FloatingAIAssistant.scss";

const suggestedQuestions = [
  "What should I eat to lose weight?",
  "How much protein do I need daily?",
  "Suggest a beginner workout plan",
  "How can I improve my sleep quality?",
];

const FloatingAIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi 👋 I’m your AI health assistant. Ask me anything about diet, fitness, or lifestyle.",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = { role: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // fake AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text:
            "That’s a great question! Once your health data is fully analyzed, I’ll give you personalized guidance here.",
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        className="ai-fab"
        onClick={() => setOpen(true)}
        aria-label="AI Assistant"
      >
        <FiMessageSquare />
      </button>

      {/* CHAT PANEL */}
      {open && (
        <div className="ai-panel">
          <header className="ai-header">
            <h4>AI Health Assistant</h4>
            <button onClick={() => setOpen(false)}>
              <FiX />
            </button>
          </header>

          <div className="ai-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>
                {m.text}
              </div>
            ))}
          </div>

          {/* SUGGESTED QUESTIONS */}
          <div className="ai-suggestions">
            {suggestedQuestions.map((q, i) => (
              <button key={i} onClick={() => sendMessage(q)}>
                {q}
              </button>
            ))}
          </div>

          {/* INPUT */}
          <div className="ai-input">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            />
            <button onClick={() => sendMessage(input)}>
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAIAssistant;
