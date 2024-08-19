import { NavLink } from "react-router-dom";

import classes from "./BottomNavbar.module.css";

const BottomNavbar = () => {
  return (
    <footer className={classes.footer}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              to="o-nama"
            >
              O nama
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="kontakt"
            >
              Kontakt
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="politika-privatnosti"
            >
              Politika Privatnosti
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="uslovi-koriscenja"
            >
              Uslovi korišćenja
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="dostava"
            >
              Dostava
            </NavLink>
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
