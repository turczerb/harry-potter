import FooterIcon from "./FooterIcon";
import FooterText from "./FooterText";
import { FooterIconData } from "./FooterIconData";
import { FooterTextData } from "./FooterTextData";
import styled from "styled-components"; //stiluska

const FooterAll = styled.div`
  background-color: black;
`;

const FooterInnerBorder = styled.div`
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
`;

const FooterBox = styled.div`
  padding: 10px;
  margin: 10px;
  border: 5px, solid, green;
`;

const Imagem = styled.img`
  height: 100px;
`;

const FooterCard = () => {
  return (
    <FooterAll>
      <FooterInnerBorder>
        <FooterBox>
          <div>
            <a href="/">
              <Imagem src={require("./potter-logo-png.png")} alt="pic"></Imagem>
            </a>
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
        </FooterBox>
      </FooterInnerBorder>
    </FooterAll>
  );
};

export default FooterCard;
