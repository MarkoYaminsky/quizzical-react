import React from "react";
import "./Home.scss";
import { Button } from "../../components";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Quizzical</h1>
      <h2>Challenge yourself. Try this multi-topic quiz.</h2>
      <Button
        text="Let's go!"
        fontSize="1.9rem"
        href="/configuration"
        animationClass="animatedExpand"
      />
    </div>
  );
};
