import Footer from "./Footer";
import { FooterIconData } from "./FooterIconData";
import styled from "styled-components"; //stiluska

const FooterCard = () => {
  return (
    <div>
      <div>
        {FooterIconData.map((item, index) => {
          return <Footer item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default FooterCard;
