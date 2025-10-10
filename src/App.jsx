import "./App.css";
import FirstComponent from "./FirstComponent";
import Fruit from "./ClassOne"
import Parent from "./PropsChildren";
import ClassResult from "./ConditionalRendering";
import Car from "./LogicalAnd"
function App() {
  return (
    <div className="App">
      <FirstComponent name="SSK"/>
      <FirstComponent name="SSK"/>
      <FirstComponent name="SSK"/>
      <Fruit/>
      <Fruit></Fruit>
      <Parent></Parent>
      <ClassResult isresult={false}/>
      <Car brand="Mustang"/>
    </div>
  );
}

export default App;