import "./App.css";
import Card from "./components/UI/Card/Card";
import Input from "./components/UI/Input/Input";

const App = () => {
  return (
    <Card>
      <Input
        label="Label"
        input={{
          type: "text"
        }}
      />
    </Card>
  );
};

export default App;
