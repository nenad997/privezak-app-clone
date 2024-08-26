import PageWrapper from "../../ui/PageWrapper";
import { deliveryData } from "../../../data/content";
import Content from "../../ui/Content";

const DeliveryLayout = () => {
  return (
    <PageWrapper>
      <h1 className="global__h1">Dostava</h1>
      <div className="global__container">
        {deliveryData.map((item) => (
          <Content key={item.id}>{item.text}</Content>
        ))}
      </div>
    </PageWrapper>
  );
};

export default DeliveryLayout;
