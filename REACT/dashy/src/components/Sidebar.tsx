import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar =() => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="sidebar__items">
        <Link
          to="/dashboard"
          className={location.pathname === "/dashboard" ? "sidebar_active" : ""}
        >
          Dashboard
        </Link>
        <Link
          to="/tabs"
          className={location.pathname === "/tabs" ? "tabs_active" : ""}
        >
          Tabs
        </Link>
        <Link
          to="/settings"
          className={location.pathname === "/settings" ? "settings_active" : ""}
        >
          Settings
        </Link>
      </div>
    </div>
  );
}

export default Sidebar