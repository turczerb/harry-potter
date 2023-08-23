import FooterIcon from "./FooterIcon";
import FooterText from "./FooterText";
import { FooterIconData } from "./FooterIconData";
import { FooterTextData } from "./FooterTextData";
import styled from "styled-components"; //stiluska

const Imagem = styled.img`
  height: 100px;
`;

const FooterCard = () => {
  return (
    <div>
      <div>
        <Imagem src={require("./potter-logo-png.png")} alt="pic"></Imagem>
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
