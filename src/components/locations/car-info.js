import React from "react";

export const CarInfo = ({ carmodel, license, state }) => {
  return (
    <div>
      <p>Car model: {carmodel}</p>
      <p>License plate: {license}</p>
      <p>Car State: {state}</p>
    </div>
  )
};