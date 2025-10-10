import React from "react";

function FirstComponent(ssk) {
  return (
    <div>
      <h1>First Component {ssk.name}</h1>
      <SecondComponent phno="1234567890" />
      <ThirdComponent address="Tiptur" />
    </div>
  );
}

function SecondComponent(ssk) {
  return (
    <div>
      Second Component {ssk.phno}
    </div>
  );
}
function ThirdComponent(ssk) {
  return (
    <div>
      Third Component {ssk.address}
    </div>
  );
}

export default FirstComponent;