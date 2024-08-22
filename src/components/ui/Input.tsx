import {
  FC,
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

import classes from "./Input.module.css";

interface Base {
  label: string;
}

interface InputProps extends Base {
  config: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

interface TextAreaProps extends Base {
  config: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
}

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
