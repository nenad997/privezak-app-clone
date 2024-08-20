import { Link } from "react-router-dom";

import HomeLogoPath from "../../assets/logo.png";

const HomeLink = () => {
  return (
    <Link to="/">
      <img src={HomeLogoPath} alt="home-logo" />
    </Link>
  );
};

export default HomeLink;
