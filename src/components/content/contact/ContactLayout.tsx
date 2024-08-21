import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

import classes from "./ContactLayout.module.css";
import PageWrapper from "../../ui/PageWrapper";
import ContactForm from "../../forms/ContactForm";

const ContactLayout = () => {
  return (
    <PageWrapper>
      <div className={classes.contact}>
        <ContactForm />
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
