import { FC } from "react";

import HomeLink from "./HomeLink";
import { PageWrapperProps } from "../../util/types";

const PageWrapper: FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <section className={`wrapper ${className}`}>
      <HomeLink />
      {children}
    </section>
  );
};

export default PageWrapper;
