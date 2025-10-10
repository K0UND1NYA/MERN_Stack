import "./App.css";
import FirstComponent from "./FirstComponent";
import Fruit from "./ClassOne"
import Parent from "./PropsChildren";
import ClassResult from "./ConditionalRendering";
import Car from "./LogicalAnd"
import Car0 from "./DestructuringOne";
import Car1 from "./DestructuringTwo";
import Parent1 from "./PropDrilling";
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
      <Car0 brand="Ford" model="Mustang" color="Red" year="1969"/>
      <Car1 brand="Ford" model="Mustang" color="Red" year="1969"/>
      <Parent1 studentNames="Shrinidhi S Koundinya" />
    </div>
  );
}

export default App;