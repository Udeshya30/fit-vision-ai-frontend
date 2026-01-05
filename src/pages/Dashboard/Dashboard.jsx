// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   AreaChart,
//   Area,
// } from "recharts";

// import { PiHandWavingBold } from "react-icons/pi";

// import { useAuth } from "../../context/AuthContext";
// import "./Dashboard.scss";

// /* TEMP MOCK DATA — later will come from backend */
// const weightData = [
//   { week: "W1", weight: 74 },
//   { week: "W2", weight: 73.2 },
//   { week: "W3", weight: 72.5 },
//   { week: "W4", weight: 71.8 },
//   { week: "W5", weight: 71.2 },
// ];

// const activityData = [
//   { day: "Mon", minutes: 35 },
//   { day: "Tue", minutes: 20 },
//   { day: "Wed", minutes: 40 },
//   { day: "Thu", minutes: 30 },
//   { day: "Fri", minutes: 45 },
//   { day: "Sat", minutes: 25 },
//   { day: "Sun", minutes: 15 },
// ];

// const consistencyData = [
//   { day: "Mon", score: 70 },
//   { day: "Tue", score: 65 },
//   { day: "Wed", score: 80 },
//   { day: "Thu", score: 75 },
//   { day: "Fri", score: 85 },
//   { day: "Sat", score: 60 },
//   { day: "Sun", score: 55 },
// ];

// const Dashboard = () => {
//   // Hook INSIDE component
//   const { user } = useAuth();

//   // Derived value INSIDE component
//   const userName =
//     user?.profile?.name ||
//     user?.email?.split("@")[0] ||
//     "there";

//   const displayName =
//   userName.charAt(0).toUpperCase() + userName.slice(1);


//   return (
//     <div className="dashboard">
//       {/* HEADER */}
//       <section className="dashboard-header">
//         <h1>
//           Welcome back, <span>{displayName}</span> <PiHandWavingBold />
//         </h1>
//         <p>
//           We’re helping you improve <strong>weight loss</strong>.
//         </p>
//       </section>

//       {/* HEALTH SCORE */}
//       <section className="health-score-card">
//         <div className="score-ring">
//           <div className="score-value">78</div>
//           <div className="score-label">Health Score</div>
//         </div>

//         <div className="score-info">
//           <h3>Great progress</h3>
//           <p>Your lifestyle consistency is improving steadily.</p>
//           <span className="score-hint">
//             Based on diet, activity & sleep
//           </span>
//         </div>
//       </section>

//       {/* SNAPSHOT */}
//       <section className="snapshot-grid">
//         <div className="snapshot-card">
//           <h4>Goal</h4>
//           <p>Weight Loss</p>
//         </div>
//         <div className="snapshot-card">
//           <h4>Lifestyle</h4>
//           <p>Active</p>
//         </div>
//         <div className="snapshot-card">
//           <h4>Weight</h4>
//           <p>71 kg</p>
//         </div>
//         <div className="snapshot-card">
//           <h4>Age</h4>
//           <p>28</p>
//         </div>
//       </section>

//       {/* CHARTS */}
//       <section className="charts-grid">
//         <div className="chart-card">
//           <h3>Weight Trend</h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <LineChart data={weightData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="week" />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="weight"
//                 stroke="#14b8a6"
//                 strokeWidth={3}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="chart-card">
//           <h3>Daily Activity (mins)</h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <BarChart data={activityData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Bar
//                 dataKey="minutes"
//                 fill="#0f766e"
//                 radius={[6, 6, 0, 0]}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="chart-card full">
//           <h3>Weekly Consistency</h3>
//           <ResponsiveContainer width="100%" height={260}>
//             <AreaChart data={consistencyData}>
//               <defs>
//                 <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} />
//                   <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.1} />
//                 </linearGradient>
//               </defs>
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Area
//                 type="monotone"
//                 dataKey="score"
//                 stroke="#14b8a6"
//                 fill="url(#colorScore)"
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;


import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

import { PiHandWavingBold } from "react-icons/pi";
import { useAuth } from "../../context/AuthContext";
import { calculateHealthScore } from "../../utils/healthScore";
import "./Dashboard.scss";

/* TEMP MOCK DATA — charts only (OK for now) */
const weightData = [
  { week: "W1", weight: 74 },
  { week: "W2", weight: 73.2 },
  { week: "W3", weight: 72.5 },
  { week: "W4", weight: 71.8 },
  { week: "W5", weight: 71.2 },
];

const activityData = [
  { day: "Mon", minutes: 35 },
  { day: "Tue", minutes: 20 },
  { day: "Wed", minutes: 40 },
  { day: "Thu", minutes: 30 },
  { day: "Fri", minutes: 45 },
  { day: "Sat", minutes: 25 },
  { day: "Sun", minutes: 15 },
];

const consistencyData = [
  { day: "Mon", score: 70 },
  { day: "Tue", score: 65 },
  { day: "Wed", score: 80 },
  { day: "Thu", score: 75 },
  { day: "Fri", score: 85 },
  { day: "Sat", score: 60 },
  { day: "Sun", score: 55 },
];

const Dashboard = () => {
  const { user } = useAuth();

  // ✅ SAFE USER ACCESS (no crashes)
  const profile = user?.profile || user || {};

  const userName =
    profile?.name ||
    user?.email?.split("@")[0] ||
    "there";

  const displayName =
    userName.charAt(0).toUpperCase() + userName.slice(1);

  const health = calculateHealthScore({
    weight: profile.weight,
    height: profile.height,
    lifestyle: profile.lifestyle,
    goal: profile.goal,
    weeklyActivityMinutes: 160, // temp (later from backend)
  });

  const goalLabel = profile?.goal
    ? profile.goal.replace("_", " ")
    : "your goal";

  return (
    <div className="dashboard">
      {/* HEADER */}
      <section className="dashboard-header">
        <h1>
          Welcome back, <span>{displayName}</span>{" "}
          <PiHandWavingBold />
        </h1>

        <p>
          We’re helping you improve{" "}
          <strong>{goalLabel}</strong>.
        </p>
      </section>

      {/* HEALTH SCORE (still mock – can be computed later) */}
      <section className="health-score-card">
        <div className="score-ring">
          <div className="score-value">
            {health?.score ?? "--"}
          </div>
          <div className="score-label">Health Score</div>
        </div>

        <div className="score-info">
          <h3>
            {health?.score >= 80
              ? "Great progress"
              : health?.score >= 60
              ? "Good momentum"
              : "Needs attention"}
          </h3>

          <p>
            BMI: {health?.bmi} <br /> Lifestyle: {profile.lifestyle}
          </p>

          <span className="score-hint">
            Based on body metrics, activity & habits
          </span>
        </div>

        {/* <div className="score-info">
          <h3>Great progress</h3>
          <p>Your lifestyle consistency is improving steadily.</p>
          <span className="score-hint">
            Based on diet, activity & sleep
          </span>
        </div> */}
      </section>

      {/* SNAPSHOT – REAL DATA */}
      <section className="snapshot-grid">
        <div className="snapshot-card">
          <h4>Goal</h4>
          <p>{goalLabel || "—"}</p>
        </div>

        <div className="snapshot-card">
          <h4>Lifestyle</h4>
          <p>{profile?.lifestyle || "—"}</p>
        </div>

        <div className="snapshot-card">
          <h4>Weight</h4>
          <p>
            {profile?.weight
              ? `${profile.weight} kg`
              : "—"}
          </p>
        </div>

        <div className="snapshot-card">
          <h4>Age</h4>
          <p>{profile?.age || "—"}</p>
        </div>
      </section>

      {/* CHARTS */}
      <section className="charts-grid">
        <div className="chart-card">
          <h3>Weight Trend</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={weightData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#14b8a6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Daily Activity (mins)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="minutes"
                fill="#0f766e"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card full">
          <h3>Weekly Consistency</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={consistencyData}>
              <defs>
                <linearGradient
                  id="colorScore"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#14b8a6"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#14b8a6"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#14b8a6"
                fill="url(#colorScore)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
