import classes from "./RegisterModal.module.css";

import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";

const RegisterModal = () => {
  return (
    <Modal>
      <form>
        <h1>Sign Up</h1>
        <Input
          className={classes.input}
          label="Your Name"
          input={{
            type: "text"
          }}
        />
        <Input
          className={classes.input}
          label="Username"
          input={{
            type: "text"
          }}
        />
        <Input
          className={classes.input}
          label="Password"
          input={{
            type: "password"
          }}
        />
        <Input
          className={classes.input}
          label="Confirm Password"
          input={{
            type: "password"
          }}
        />
        <div className={classes["container-btns"]}>
          <button className={classes["btn-submit"]}>SUBMIT</button>
          <button className={classes["btn-back"]}>GO BACK</button>
        </div>
      </form>
    </Modal>
  );
};

export default RegisterModal;
