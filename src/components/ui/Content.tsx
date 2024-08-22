import { FC } from "react";

import classes from "./Content.module.css";
import { ContentProps } from "../../util/types";

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
