import React from "react";
import "./Button.scss";

type ButtonProps = {
  theme: "primary" | "secondary";
  label: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ theme, label, onClick }) => {
  return (
    <button className={`button ${theme}-theme`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
