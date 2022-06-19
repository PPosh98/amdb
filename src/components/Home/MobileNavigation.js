import { Fragment } from "react";

import classes from "./MobileNavigation.module.css";

import NavLinks from "./NavLinks";

const MobileNavigation = (props) => {
  return <NavLinks className={props.className} />;
};

export default MobileNavigation;
