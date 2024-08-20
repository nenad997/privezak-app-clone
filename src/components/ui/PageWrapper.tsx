import { FC, JSX } from "react";

interface PageWrapperProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, className }) => {
  return <section className={`wrapper ${className}`}>{children}</section>;
};

export default PageWrapper;
