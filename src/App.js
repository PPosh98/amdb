import "./App.css";
import Input from "./components/UI/Input/Input";
import Modal from "./components/UI/Modal/Modal";

const App = () => {
  return (
    <Modal>
      <Input
        label="Label"
        input={{
          type: "text"
        }}
      />
    </Modal>
  );
};

export default App;
