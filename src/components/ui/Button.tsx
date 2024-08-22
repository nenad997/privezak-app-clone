import { FC, ReactNode, ButtonHTMLAttributes } from "react";

import classes from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  config: ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({ children, config }) => {
  return (
    <button className={classes.button} {...config}>
      {children}
    </button>
  );
};

export default Button;
