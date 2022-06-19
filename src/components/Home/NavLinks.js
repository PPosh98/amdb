import { Fragment } from "react";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <ul className={`${classes.navlinks} ${props.className}`}>
      <li>
        <a href="#">Top Rated Movies</a>
      </li>
      <li>
        <a href="#">Popular Movies</a>
      </li>
      <li>
        <a href="#">Latest Movies</a>
      </li>
      <li>
        <a href="#">Upcoming Movies</a>
      </li>
      <li>
        <a href="#">Showing Now</a>
      </li>
    </ul>
  );
};

export default NavLinks;
