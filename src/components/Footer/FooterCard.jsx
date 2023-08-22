import FooterIcon from "./FooterIcon";
import FooterText from "./FooterText";
import { FooterIconData } from "./FooterIconData";
import { FooterTextData } from "./FooterTextData";
import styled from "styled-components"; //stiluska

const FooterCard = () => {
  return (
    <div>
      <div>
        {FooterIconData.map((item, index) => {
          return <FooterIcon item={item} key={index} />;
        })}
      </div>
      <hr></hr>
      <div>
        {FooterTextData.map((itemk, index) => {
          return <FooterText item={itemk} key={index} />;
        })}
      </div>
    </div>
  );
};

export default FooterCard;
