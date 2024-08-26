import PageWrapper from "../../ui/PageWrapper";
import classes from "./TermsLayout.module.css";

const TermsLayout = () => {
  return (
    <PageWrapper>
      <h1 className="global__h1">Uslovi korišćenja</h1>
      <p className={classes.info}>
        <span>
          Izbor artikala, lager i cene ne moraju biti isti kao u maloprodaji
          YELA LEATHER STUDIO.
        </span>
        <span className={classes.contact}>
          Za sve dodatne informacije možete nas kontaktirati putem:
          <span>mejla: info@yls.rs</span>
          <span>ili na telefon: +381641292732</span>
        </span>
      </p>
    </PageWrapper>
  );
};

export default TermsLayout;
