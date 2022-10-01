import React from "react";
import "./Spots.scss";
import { useState, useEffect } from "react";

import blueSpot from "../../assets/images/blueSpot.svg";
import lemonSpot from "../../assets/images/lemonSpot.svg";

interface SpotsProps {
  lemonSpotWidth: string;
  blueSpotWidth: string;
}

export const Spots: React.FC<SpotsProps> = (props: SpotsProps) => {
  return (
    <div className="spots">
      <img
        style={{
          width: props.blueSpotWidth
        }}
        src={blueSpot}
        alt="blueSpot"
        id="blueSpot"
      />
      <img
        style={{
          width: props.lemonSpotWidth
        }}
        src={lemonSpot}
        alt="lemonSpot"
        id="lemonSpot"
      />
    </div>
  );
};
