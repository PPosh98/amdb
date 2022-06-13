import classes from "./Modal.module.css";

import { Fragment } from "react";

const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>{props.children}</div>
    </Fragment>
  );
};

export default Modal;
