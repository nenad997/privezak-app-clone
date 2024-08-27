import classes from "./HomeLayout.module.css";
import PageWrapper from "../ui/PageWrapper";

const HomeLayout = () => {
  return (
    <PageWrapper className={classes.home}>
      <div
        className={classes.desc}
      >
        <h1>Napravi Privezak!</h1>
        <p>
          Biraj <span>tip, oblik, boju i tekst</span> koji izrazava tvoj{" "}
          <span>jedinstveni stil.</span>
        </p>
        <a href="#">Počni ovde!</a>
      </div>
    </PageWrapper>
  );
};

export default HomeLayout;
