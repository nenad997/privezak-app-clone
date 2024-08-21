import { FC, ReactNode } from "react";

import classes from "./Content.module.css";

interface ContentProps {
  children: ReactNode;
  useSeparator?: boolean;
}

export function Separator() {
  return (
    <>
      <br />
      <br />
    </>
  );
}

const Content: FC<ContentProps> = ({ children, useSeparator = true }) => {
  return (
    <>
      <p className={classes.text}>{children}</p>
      {useSeparator && <Separator />}
    </>
  );
};

export default Content;
