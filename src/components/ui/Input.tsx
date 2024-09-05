import { FC } from "react";

import classes from "./Input.module.css";
import { InputProps, TextAreaProps } from "../../util/types";
import { filterError } from "../../util/helpers";

const Input: FC<InputProps> = ({ label, config, validationConfig }) => {
  const error = filterError(validationConfig);

  return (
    <>
      <label className={classes.label} htmlFor={config.id}>
        {label}
      </label>
      <input
        style={{
          border: error ? "1px solid red" : undefined,
        }}
        className={classes.input}
        {...config}
      />
      {error && <p className={classes.error}>{error?.message}</p>}
    </>
  );
};

export default Input;

export const TextArea: FC<TextAreaProps> = ({
  label,
  config,
  validationConfig,
}) => {
  const error = filterError(validationConfig);

  return (
    <>
      <label className={classes.label} htmlFor={config.id}>
        {label}
      </label>
      <textarea
        style={{
          border: error ? "1px solid red" : undefined,
        }}
        className={classes.textarea}
        {...config}
      />
      {error && <p className={classes.error}>{error?.message}</p>}
    </>
  );
};
