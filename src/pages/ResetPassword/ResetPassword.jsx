import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { resetPassword } from "../../services/authService";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!password || password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      await resetPassword(token, password);
      toast.success("Password updated successfully 🔐");
      navigate("/login", { replace: true });
    } catch {
      toast.error("Invalid or expired reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Set New Password">
      <input
        className="form-control mb-3"
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="btn btn-primary w-100"
        onClick={submit}
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Password"}
      </button>
    </AuthLayout>
  );
};

export default ResetPassword;
