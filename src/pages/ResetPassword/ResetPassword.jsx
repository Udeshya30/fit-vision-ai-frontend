import AuthLayout from "../../components/AuthLayout/AuthLayout";

const ResetPassword = () => {
  return (
    <AuthLayout title="Set New Password">
      <input
        className="form-control mb-3"
        type="password"
        placeholder="New Password"
      />
      <button className="btn btn-primary w-100">
        Update Password
      </button>
    </AuthLayout>
  );
};

export default ResetPassword;
