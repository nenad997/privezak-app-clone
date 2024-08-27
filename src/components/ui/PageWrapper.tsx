import { FC } from "react";
import { useMediaQuery } from "react-responsive";

import HomeLink from "./HomeLink";
import { PageWrapperProps } from "../../util/types";

const PageWrapper: FC<PageWrapperProps> = ({ children, className }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <section
      className={`global__wrapper ${className ? className : ""}`.trimEnd()}
      style={{ textAlign: isTabletOrMobile ? "center" : undefined }}
    >
      <HomeLink />
      {children}
    </section>
  );
};

export default PageWrapper;
