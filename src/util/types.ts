import {
  ReactNode,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export type ButtonProps = {
  children: ReactNode;
  config: ButtonHTMLAttributes<HTMLButtonElement>;
};

export type ValidationConfig = {
  errors: ValidationError[];
  path: string;
};

export interface Base {
  label: string;
  validationConfig: ValidationConfig;
}

export interface InputProps extends Base {
  config: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export interface TextAreaProps extends Base {
  config: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
}

export interface PageWrapperProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export interface ContentProps {
  children: ReactNode;
  useSeparator?: boolean;
}

export interface ServiceProps {
  topic: string;
  children: ReactNode;
}

export type Content = {
  id: string;
  text: string;
};

export type Service = {
  text: string;
  topic: string;
};

export type ContactFormInputs = {
  ime: string;
  prezime: string;
  email: string;
  telefon: string;
  poruka: string;
};

export interface ValidationError {
  message?: string;
  path: string;
}
