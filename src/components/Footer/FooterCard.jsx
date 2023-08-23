import FooterIcon from "./FooterIcon";
import FooterText from "./FooterText";
import { FooterIconData } from "./FooterIconData";
import { FooterTextData } from "./FooterTextData";
import styled from "styled-components"; //stiluska

const FooterAll = styled.div`
  background-color: black;
  padding: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FooterInnerBorder = styled.div`
  border: 2px solid white;
  display: flex;
  flex-direction: column;
`;

const FooterBox = styled.div`
  padding: 10px;
  margin: 10px;
  border: 5px, solid, green;
`;

const FooterUpperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Imagem = styled.img`
  height: 100px;
`;

const Divider = styled.hr`
  border-bottom: 1px solid;
  width: 80%;
`;

const FooterLowerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //flex-direction: column-reverse;
  padding: 15px;
`;

const Collect = styled.div``;

const FooterCard = () => {
  return (
    <FooterAll>
      <FooterInnerBorder>
        <FooterBox>
          <FooterUpperContainer>
            <a href="/">
              <Imagem src={require("./potter-logo-png.png")} alt="pic"></Imagem>
            </a>
          </FooterUpperContainer>
          <Divider></Divider>
          <FooterLowerContainer>
            {FooterTextData.map((itemk, index) => {
              return <FooterText item={itemk} key={index} />;
            })}

            {FooterIconData.map((item, index) => {
              return <FooterIcon item={item} key={index} />;
            })}
          </FooterLowerContainer>
        </FooterBox>
      </FooterInnerBorder>
    </FooterAll>
  );
};

export default FooterCard;
