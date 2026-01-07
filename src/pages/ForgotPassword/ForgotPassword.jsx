import { useState } from "react";
import toast from "react-hot-toast";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { forgotPassword } from "../../services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      await forgotPassword(email);
      toast.success(
        "Reset link has been sent to your email"
      );
      setEmail("");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Reset Password">
      <input
        className="form-control mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="btn btn-primary w-100"
        onClick={submit}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>
    </AuthLayout>
  );
};

export default ForgotPassword;
