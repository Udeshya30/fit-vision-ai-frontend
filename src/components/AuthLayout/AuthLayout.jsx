import "./AuthLayout.scss";

const AuthLayout = ({ title, children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__card">
        <h2 className="mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
