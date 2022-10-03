import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  fontSize: string;
  href?: string;
  class?: string;
  type?: "button" | "submit" | "reset";
}

const ButtonContent: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      style={{
        fontSize: props.fontSize,
      }}
      type={props.type || "button"}
    >
      {props.text}
    </button>
  );
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <div
      className={
        props.class ? props.class + " button" : "button"
      }
    >
      {props.href ? (
        <Link className="linkTo" to={props.href}>
          <ButtonContent {...props} />
        </Link>
      ) : (
        <ButtonContent {...props} />
      )}
    </div>
  );
};
