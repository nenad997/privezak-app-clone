import { FC } from "react";

import classes from "./Input.module.css";
import { InputProps, TextAreaProps } from "../../util/types";

const Input: FC<InputProps> = ({ label, config }) => {
  return (
    <>
      <label className={classes.label} htmlFor={config.id}>
        {label}
      </label>
      <input className={classes.input} {...config} />
    </>
  );
};

export default Input;

export const TextArea: FC<TextAreaProps> = ({ label, config }) => {
  return (
    <>
      <label className={classes.label} htmlFor={config.id}>
        {label}
      </label>
      <textarea className={classes.textarea} {...config} />
    </>
  );
};
