const API_BASE = import.meta.env.VITE_API_BASE_URL;

const fetchWithCreds = (url, options = {}) =>
  fetch(`${API_BASE}${url}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

export const loginUser = async (payload) => {
  const res = await fetchWithCreds("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Login failed");
};

export const signupUser = async (payload) => {
  const res = await fetchWithCreds("/auth/signup", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Signup failed");
};

export const logoutUser = async () => {
  await fetchWithCreds("/auth/logout", { method: "POST" });
};

export const getCurrentUser = async () => {
  const res = await fetchWithCreds("/users/me");
  if (!res.ok) throw new Error("Not authenticated");
  return res.json();
};

/* 🔐 FORGOT PASSWORD */
export const forgotPassword = async (email) => {
  const res = await fetchWithCreds("/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error("Failed to send reset link");
};

/* 🔐 RESET PASSWORD */
export const resetPassword = async (token, password) => {
  const res = await fetchWithCreds(`/auth/reset-password/${token}`, {
    method: "POST",
    body: JSON.stringify({ password }),
  });
  if (!res.ok) throw new Error("Reset password failed");
};
