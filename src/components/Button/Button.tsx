import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  fontSize: string;
  href?: string;
  animationClass?: string;
  type?: "button" | "submit" | "reset";
}

const ButtonContent: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={
        props.animationClass ? props.animationClass + " button" : "button"
      }
      style={{ fontSize: props.fontSize }}
      type={props.type || "button"}
    >
      {props.text}
    </button>
  );
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return props.href ? (
    <Link className="linkTo" to={props.href}>
      <ButtonContent {...props} />
    </Link>
  ) : (
    <ButtonContent {...props} />
  );
};
