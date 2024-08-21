import { FC, ReactNode } from "react";

import classes from "./Service.module.css";

interface ServiceProps {
  topic: string;
  children: ReactNode;
}

const Service: FC<ServiceProps> = ({ children, topic }) => {
  return (
    <div className={classes.service}>
      <h2>{topic}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Service;
