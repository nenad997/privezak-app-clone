import classes from "./PrivacyLayout.module.css";
import PageWrapper from "../../ui/PageWrapper";
import Content from "../../ui/Content";
import Service from "../../service/Service";
import { privacyContent, serviceData } from "../../../data/content";

const PrivacyLayout = () => {
  return (
    <PageWrapper className={classes.container}>
      <h1 className="global__h1">Politika privatnosti</h1>
      <div className="global__container">
        {privacyContent.map((item) => (
          <Content key={item.id}>{item.text}</Content>
        ))}
        {serviceData.map((item, index) => (
          <Service key={index} topic={item.topic}>
            {item.text}
          </Service>
        ))}
      </div>
    </PageWrapper>
  );
};

export default PrivacyLayout;
