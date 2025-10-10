import "./App.css";
import FirstComponent from "./FirstComponent";
import Fruit from "./ClassOne"
import Parent from "./PropsChildren";
function App() {
  return (
    <div className="App">
      <FirstComponent name="SSK"/>
      <FirstComponent name="SSK"/>
      <FirstComponent name="SSK"/>
      <Fruit/>
      <Fruit></Fruit>
      <Parent></Parent>
    </div>
  );
}

export default App;