import { FC } from "react";

interface InputProps {
  label: string;
  config: object | any;
}

const Input: FC<InputProps> = ({ label, config }) => {
  return (
    <>
      <label htmlFor={config.id}>{label}</label>
      <input {...config} />
    </>
  );
};

export default Input;

export const TextArea: FC<InputProps> = ({ label, config }) => {
  return (
    <>
      <label htmlFor={config.id}>{label}</label>
      <textarea {...config} />
    </>
  );
};
