import { Fragment } from "react";

import classes from "./Navigation.module.css";

import NavLinks from "./NavLinks";

const Navigation = (props) => {
  return <NavLinks className={props.className} />;
};

export default Navigation;
