import React from "react";
import { useBattery } from "@uidotdev/usehooks";

export default function Battery() {
  const battery = useBattery();

  console.log("Battery Hook Output:", battery); 

  if (!battery || battery.loading) {
    return (
      <div className="wrapper">
        <h1 className="text-xl font-semibold">Battery Status</h1>
        <p>Loading battery info...</p>
      </div>
    );
  }
  const { level, charging, chargingTime, dischargingTime } = battery;
  return (
    <div className="wrapper p-4 rounded-lg shadow-lg bg-white">
      <h1 className="text-xl font-semibold mb-2"> Battery Info</h1>

      <p>Battery Level: {(level * 100).toFixed(0)}%</p>
      <p>Status: {charging ? " Charging" : " Not Charging"}</p>
      <p>Charging Time: {chargingTime ? `${chargingTime}s` : "N/A"}</p>
      <p>Discharging Time: {dischargingTime ? `${dischargingTime}s` : "N/A"}</p>
      </div>
  );
}
