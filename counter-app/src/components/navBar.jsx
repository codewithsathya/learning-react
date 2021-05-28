import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand p-4">
        Navbar{" "}
        <span className="badge bg-secondary">{props.totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
