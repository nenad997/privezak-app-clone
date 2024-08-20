import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

import classes from "./ContactLayout.module.css";
import PageWrapper from "../../ui/PageWrapper";
import HomeLink from "../../ui/HomeLink";

const ContactLayout = () => {
  return (
    <PageWrapper>
      <HomeLink />
      <div className={classes.contact}>
        <div className={classes.contact__form}>
          <form className={classes.form}>
            <div className={classes.controls}>
              <div className={classes.control}>
                <label htmlFor="ime">Ime *</label>
                <input type="text" id="ime" />
              </div>
              <div className={classes.control}>
                <label htmlFor="prezime">Prezime *</label>
                <input type="text" id="prezime" />
              </div>
            </div>
            <div className={classes.controls}>
              <div className={classes.control}>
                <label htmlFor="email">Email adresa *</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="phone">Telefon *</label>
                <input type="text" id="phone" />
              </div>
            </div>
            <div className={classes.text__area}>
              <label htmlFor="poruka">Poruka *</label>
              <textarea></textarea>
            </div>
            <button className={classes.button} type="submit">
              Pošalji
            </button>
          </form>
        </div>
        <div className={classes.info}>
          <div className={classes.left}>
            <span>
              <MdOutlineEmail />
              Email
            </span>
            <span>email@gmail.com</span>
          </div>
          <div className={classes.right}>
            <a href="http://www.facebook.com" target="_blank">
              <FaFacebookF />
            </a>
            <a href="http://www.tiktok.com/" target="_blank">
              <FaTiktok />
            </a>
            <a href="http://www.instagram.com" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactLayout;
