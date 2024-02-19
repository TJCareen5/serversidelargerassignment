import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return(
    <nav>
      <ul>
        <li>
          <Link to="/">Movie Reviews</Link>
        </li>
        <li>
          <Link to="/form">Submit Movie Review</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;