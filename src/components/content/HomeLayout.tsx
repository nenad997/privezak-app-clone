import { Link } from "react-router-dom";

import classes from "./HomeLayout.module.css";
import HomeLogo from "../../assets/logo.png";

const HomeLayout = () => {
  return (
    <section className={classes.home}>
      <div className={classes.logo}>
        <Link to="/">
          <span className={classes.wrapper}>
            <img className={classes.image} src={HomeLogo} alt="home-logo" />
          </span>
        </Link>
      </div>
      <div className={classes.desc}>
        <h1>Napravi Privezak!</h1>
        <p>
          Biraj <span>tip, oblik, boju i tekst</span> koji izrazava tvoj{" "}
          <span>jedinstveni stil.</span>
        </p>
        <a href="#">Počni ovde!</a>
      </div>
    </section>
  );
};

export default HomeLayout;
