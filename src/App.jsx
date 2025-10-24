import "./App.css";
import FirstComponent from "./FirstComponent";
import Fruit from "./ClassOne"
import Parent from "./PropsChildren";
import ClassResult from "./ConditionalRendering";
import Car from "./LogicalAnd"
import Car0 from "./DestructuringOne";
import Car1 from "./DestructuringTwo";
import Parent1 from "./PropDrilling";
// import SimpleValidation from "./FormValidation"
// import External from "./External";
// import Temperature from "./Css";
// import Button from "./Button";
import Component1 from "./HookOne/ContextApi";
import Ref from "./HookOne/Ref";
import AcessingDom from "./HookOne/AcessingDom";
import Track from "./HookOne/Track";
import Battery from "./HookOne/UseBattery";
import Counter from "./HookOne/Reducer";
import Counter1 from "./HookOne/IncrementByTwo";
function App() {
  return (
    <div className="App">
      {/* <FirstComponent name="SSK"/>
      <FirstComponent name="SSK"/>
      <FirstComponent name="SSK"/>
      <Fruit/>
      <Fruit></Fruit>
      <Parent></Parent>
      <ClassResult isresult={false}/>
      <Car brand="Mustang"/>
      <Car0 brand="Ford" model="Mustang" color="Red" year="1969"/>
      <Car1 brand="Ford" model="Mustang" color="Red" year="1969"/>
      <Parent1 studentNames="Shrinidhi S Koundinya" /> */}
      {/* <HtmlForms />
      <HtmlForms/> */}
      {/* <ControlledForm /> */}
      {/* <TwoWayBinding /> */}
      {/* <SimpleValidation /> */}
      {/* <Temperature value="30"/> */}
      {/* <External/> */}
      {/* <Button /> */}
      {/* <Component1/> */}
      {/* <Ref/> */}
      {/* <AcessingDom /> */}
      {/* <Track/> */}
      {/* <Battery/> */}
      {/* <Counter /> */}
      <Counter1 />
    </div>
  );
}

export default App;