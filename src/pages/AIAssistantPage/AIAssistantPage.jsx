import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import "./AIAssistantPage.scss";

const suggestedQuestions = [
  "What should I eat to lose weight?",
  "Create a simple weekly workout plan",
  "How can I improve my sleep quality?",
  "What should I focus on today?",
  "How many calories should I eat?",
  "Best exercises for fat loss?",
];

const AIAssistantPage = () => {
  const { user } = useAuth();
  const profile = user?.profile || user || {};

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text:
        "Hi 👋 I’m your AI health assistant. I’ll personalize advice based on your goal, lifestyle, and habits.",
    },
  ]);

  const [input, setInput] = useState("");

  // 👇 REF FOR AUTO SCROLL
  const messagesEndRef = useRef(null);

  // 👇 AUTO SCROLL WHEN MESSAGES CHANGE
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // const sendMessage = (text) => {
  //   if (!text.trim()) return;

  //   setMessages((prev) => [
  //     ...prev,
  //     { role: "user", text },
  //   ]);
  //   setInput("");

  //   setTimeout(() => {
  //     setMessages((prev) => [
  //       ...prev,
  //       {
  //         role: "ai",
  //         text:
  //           "Thanks for asking. I’ll start giving you personalized guidance here once real AI responses are connected.",
  //       },
  //     ]);
  //   }, 600);
  // };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text },
    ]);
    setInput("");

    setTimeout(() => {
      const aiReply = getSuggestedAnswer(text, profile);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: aiReply,
        },
      ]);
    }, 500);
  };




  // MOCK AI RESPONSES BASED ON PROFILE & QUESTION
  const getSuggestedAnswer = (question, profile) => {
  const {
    goal,
    lifestyle,
    age,
    weight,
  } = profile || {};

  switch (question) {
    case "What should I eat to lose weight?":
      return `
To lose weight sustainably, focus on:

• High-protein foods (eggs, dal, chicken, tofu)
• Plenty of vegetables and fiber
• Limiting sugar, fried foods, and refined carbs

Since your goal is "${goal || "general health"}",
aim for balanced meals instead of extreme dieting.
Consistency matters more than perfection.
`;

    case "Create a simple weekly workout plan":
      return `
Here’s a simple weekly plan based on a ${lifestyle || "moderate"} lifestyle:

• 3 days: Full-body strength (30–40 mins)
• 2 days: Light cardio (walking, cycling)
• 2 days: Rest or mobility

If you're short on time, even 20 minutes a day is effective.
`;

    case "How can I improve my sleep quality?":
      return `
To improve sleep quality:

• Keep a fixed bedtime & wake time
• Avoid screens 60 minutes before bed
• Avoid heavy meals late at night
• Get sunlight exposure in the morning

Good sleep will directly improve energy, fat loss, and recovery.
`;

    case "What should I focus on today?":
      return `
For today, focus on just 3 things:

1. Move your body for at least 20–30 minutes
2. Eat mindfully (don’t skip meals)
3. Get enough sleep tonight

Small daily wins create long-term results.
`;

    case "How many calories should I eat?":
      return `
Based on your details:

• Age: ${age || "—"}
• Weight: ${weight ? `${weight} kg` : "—"}

A rough estimate for maintenance is:
👉 bodyweight × 30–33 calories

For fat loss, reduce by ~300–400 calories.
This is an estimate — consistency matters more than exact numbers.
`;

    case "Best exercises for fat loss?":
      return `
The best exercises for fat loss are:

• Walking (most underrated & sustainable)
• Strength training (preserves muscle)
• Short cardio sessions (cycling, jogging)
• Bodyweight workouts

Fat loss comes from consistency + nutrition, not extreme workouts.
`;

    default:
      return `
That’s a great question.
I’ll soon be able to give fully personalized answers as AI gets connected.
`;
  }
};


  return (
    <div className="ai-page">
      {/* HEADER */}
      <header className="ai-header">
        <h1>AI Assistant</h1>
        <p>Your personal health, fitness & lifestyle guide</p>
      </header>

      {/* MAIN */}
      <div className="ai-main">
        {/* CHAT */}
        <section className="ai-chat">
          {/* AI AVATAR */}
          <div className="ai-avatar">
            <img
              // src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
              src="https://www.shutterstock.com/image-vector/happy-robot-3d-ai-character-600nw-2464455965.jpg"
              alt="AI Assistant"
            />
            <span>FitVision AI</span>
          </div>

          {/* MESSAGES */}
          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble ${m.role}`}>
                {m.text}
              </div>
            ))}

            {/* 👇 SCROLL ANCHOR */}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div className="chat-input">
            <input
              placeholder="Ask your AI assistant…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage(input)
              }
            />
            <button onClick={() => sendMessage(input)}>
              <FiSend />
            </button>
          </div>
        </section>

        {/* CONTEXT */}
        <aside className="ai-context">
          <h3>Your Context</h3>

          <div className="context-item">
            <span>Goal</span>
            <strong>
              {profile.goal?.replace("_", " ") || "—"}
            </strong>
          </div>

          <div className="context-item">
            <span>Lifestyle</span>
            <strong>{profile.lifestyle || "—"}</strong>
          </div>

          <div className="context-item">
            <span>Age</span>
            <strong>{profile.age || "—"}</strong>
          </div>

          <div className="context-item">
            <span>Weight</span>
            <strong>
              {profile.weight ? `${profile.weight} kg` : "—"}
            </strong>
          </div>

          <h4>Try asking</h4>

          {/* SCROLLABLE SUGGESTIONS */}
          <div className="context-suggestions">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AIAssistantPage;
