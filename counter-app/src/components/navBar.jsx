import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand p-4">
        Navbar <span className="badge bg-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
