import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [lightPosition, setLightPosition] = useState(0);

  const changeLight = () => {
    if (lightPosition === 2) {
      setLightPosition(0);
    } else {
      setLightPosition(lightPosition + 1);
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div
          className={lightPosition === 0 ? "circle red" : "circle black"}
        ></div>
        <div
          className={lightPosition === 1 ? "circle yellow" : "circle black"}
        ></div>
        <div
          className={lightPosition === 2 ? "circle green" : "circle black"}
        ></div>
      </div>
      <button className="next-state-button" onClick={changeLight}>
        Next State
      </button>
    </div>
  );
};
