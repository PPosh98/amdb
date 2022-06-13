import classes from "./Modal.module.css";

import { Fragment } from "react";

const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <button className={classes["btn-close-modal"]}>&times;</button>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
