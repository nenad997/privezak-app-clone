import { FC } from "react";

import HomeLink from "./HomeLink";
import { PageWrapperProps } from "../../util/types";

const PageWrapper: FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <section
      className={`global__wrapper ${className ? className : ""}`.trimEnd()}
    >
      <HomeLink />
      {children}
    </section>
  );
};

export default PageWrapper;
