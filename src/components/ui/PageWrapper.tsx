import { FC, JSX } from "react";

import HomeLink from "./HomeLink";

interface PageWrapperProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <section className={`wrapper ${className}`}>
      <HomeLink />
      {children}
    </section>
  );
};

export default PageWrapper;
