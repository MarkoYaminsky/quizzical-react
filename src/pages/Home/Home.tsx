import React from "react";
import "./Home.scss";
import { Spots } from "../../components";
import { Button } from "../../components";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <Spots lemonSpotWidth="20vw" blueSpotWidth="20vw" />
      <h1>Quizzical</h1>
      <h2>Challenge yourself. Try this multi-topic quiz.</h2>
      <Button text={"Start quiz"} fontSize={"1.9rem"} href={"/quiz"} />
    </div>
  );
};
