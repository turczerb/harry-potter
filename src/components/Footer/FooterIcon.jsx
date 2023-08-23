import styled from "styled-components"; //stiluska

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
`;

const FooterInner = styled.div`
  width: 40px;
  height: 40px;
  background-color: #242633;
  border-radius: 50%;
  margin: 20px;
  justify-content: center;
  display: flex;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoStilo = styled.a`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Footer = ({ item }) => {
  return (
    <FooterContainer>
      <FooterInner to={item.path}>
        <LogoContainer>
          <LogoStilo href={item.path}>{item.icon}</LogoStilo>
        </LogoContainer>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
