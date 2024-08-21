import PageWrapper from "../../ui/PageWrapper";
import Content from "../../ui/Content";
import { aboutContent } from "../../../data/content";

const AboutContent = () => {
  return (
    <PageWrapper>
      <h1 className="global__h1">O nama</h1>
      <div className="global__container">
        {aboutContent.map((item) => (
          <Content key={item.id}>{item.text}</Content>
        ))}
      </div>
    </PageWrapper>
  );
};

export default AboutContent;
