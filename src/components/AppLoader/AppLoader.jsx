import "./AppLoader.scss";

const AppLoader = () => {
  return (
    <div className="app-loader">
      <div className="loader-wrapper">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default AppLoader;
