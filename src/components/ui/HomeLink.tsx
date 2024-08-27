import { Link } from "react-router-dom";

import HomeLogoPath from "../../assets/logo.png";
import classes from "./HomeLink.module.css";

const HomeLink = () => {
  return (
    <Link to="/" className={classes.link}>
      <img src={HomeLogoPath} alt="home-logo" />
    </Link>
  );
};

export default HomeLink;
