import { FC } from "react";

import classes from "./Button.module.css";
import { ButtonProps } from "../../util/types";

const Button: FC<ButtonProps> = ({ children, config }) => {
  return (
    <button className={classes.button} {...config}>
      {children}
    </button>
  );
};

export default Button;
