import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  fontSize: string;
  href?: string;
}

const ButtonContent: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <div className="button" style={{ fontSize: props.fontSize }}>
      {props.text}
    </div>
  );
};

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return props.href ? (
    <Link className="linkToQuiz" to={props.href}>
      <ButtonContent {...props} />
    </Link>
  ) : (
    <ButtonContent {...props} />
  );
};
