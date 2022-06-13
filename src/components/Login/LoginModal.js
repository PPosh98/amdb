import classes from "./LoginModal.module.css";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";

const LoginModal = () => {
  return (
    <Modal>
      <form>
        <h1>Login</h1>
        <Input
          className={classes.username}
          label="Username"
          input={{
            type: "text"
          }}
        />
        <Input
          className={classes.password}
          label="Password"
          input={{
            type: "password"
          }}
        />
        <div className={classes["container-btns"]}>
          <button className={classes["btn-login"]}>LOGIN</button>
          <button className={classes["btn-registration"]}>
            CREATE AN ACCOUNT
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginModal;
