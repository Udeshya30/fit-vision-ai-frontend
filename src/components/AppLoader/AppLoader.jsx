import "./AppLoader.scss";

const AppLoader = () => {
  return (
    <div className="app-loader">
      <div className="spinner" />
      <p>Loading your workspace…</p>
    </div>
  );
};

export default AppLoader;
