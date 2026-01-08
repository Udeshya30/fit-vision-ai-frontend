import { useState, useRef, useEffect } from "react";
import { FiBell, FiLogOut, FiUser } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./DashboardTopbar.scss";

const DashboardTopbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const name =
    user?.profile?.name ||
    user?.email?.split("@")[0] ||
    "User";

  const initial = name.charAt(0).toUpperCase();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="dashboard-topbar">
      <h4>Dashboard</h4>

      <div className="topbar-actions">
        <button className="icon-btn">
          <FiBell />
        </button>

        <div className="avatar-wrapper" ref={dropdownRef}>
          <button
            className="avatar"
            onClick={() => setOpen((v) => !v)}
            aria-label="User menu"
          >
            {initial}
          </button>

          {open && (
            <div className="avatar-dropdown">
              <div className="user-info">
                <span className="name">{name}</span>
                <span className="email">
                  {user?.email}
                </span>
              </div>
              
              <div className="user-options">
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setOpen(false);
                    navigate("/dashboard/profile");
                  }}
                >
                  <FiUser />
                  Profile
                </button>

                <button
                  className="dropdown-item danger"
                  onClick={handleLogout}
                >
                  <FiLogOut />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardTopbar;
