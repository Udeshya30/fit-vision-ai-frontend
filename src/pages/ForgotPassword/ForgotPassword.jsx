import AuthLayout from "../../components/AuthLayout/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout title="Reset Password">
      <input className="form-control mb-3" placeholder="Email" />
      <button className="btn btn-primary w-100">
        Send Reset Link
      </button>
    </AuthLayout>
  );
};

export default ForgotPassword;
