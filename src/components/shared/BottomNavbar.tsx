import { NavLink } from "react-router-dom";

import classes from "./BottomNavbar.module.css";

const BottomNavbar = () => {
  return (
    <footer className={classes.footer}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <NavLink to="o-nama">O nama</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="kontakt">Kontakt</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="politika-privatnosti">Politika Privatnosti</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="uslovi-koriscenja">Uslovi korišćenja</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="dostava">Dostava</NavLink>
          </li>
        </ul>
      </nav>
      <p className={classes.info}>
        @ {new Date().getFullYear()} | Dizajner Nenad Matijević
      </p>
    </footer>
  );
};

export default BottomNavbar;
