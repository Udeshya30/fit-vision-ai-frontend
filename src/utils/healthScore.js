export function calculateHealthScore({
  weight,
  height,
  lifestyle,
  goal,
  weeklyActivityMinutes = 0,
}) {
  if (!weight || !height) return null;

  /* ---------- BMI ---------- */
  const heightMeters = height / 100;
  const bmi = weight / (heightMeters * heightMeters);

  let bmiScore = 40;
  if (bmi >= 18.5 && bmi <= 24.9) bmiScore = 100;
  else if (bmi >= 25 && bmi <= 29.9) bmiScore = 80;
  else if (bmi >= 30 && bmi <= 34.9) bmiScore = 60;
  else if (bmi < 18.5) bmiScore = 70;

  /* ---------- ACTIVITY ---------- */
  let activityScore = 30;
  if (weeklyActivityMinutes >= 210) activityScore = 100;
  else if (weeklyActivityMinutes >= 150) activityScore = 85;
  else if (weeklyActivityMinutes >= 90) activityScore = 70;
  else if (weeklyActivityMinutes >= 30) activityScore = 50;

  /* ---------- LIFESTYLE ---------- */
  const lifestyleScoreMap = {
    sedentary: 40,
    moderate: 70,
    active: 100,
  };
  const lifestyleScore =
    lifestyleScoreMap[lifestyle?.toLowerCase()] ?? 50;

  /* ---------- GOAL ALIGNMENT ---------- */
  let goalScore = 70;
  if (goal === "weight_loss" && bmi > 25) goalScore = 100;
  if (goal === "fitness" && weeklyActivityMinutes >= 150)
    goalScore = 100;
  if (goal === "longevity" && lifestyle !== "sedentary")
    goalScore = 90;

  /* ---------- FINAL SCORE ---------- */
  const finalScore =
    bmiScore * 0.35 +
    activityScore * 0.3 +
    lifestyleScore * 0.2 +
    goalScore * 0.15;

  return {
    score: Math.round(finalScore),
    bmi: Number(bmi.toFixed(1)),
    breakdown: {
      bmiScore,
      activityScore,
      lifestyleScore,
      goalScore,
    },
  };
}
