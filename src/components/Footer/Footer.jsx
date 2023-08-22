import styled from "styled-components"; //stiluska

const FooterContainer = styled.div``;

const FooterInner = styled.div``;

const Footer = ({ item }) => {
  return (
    <FooterContainer>
      <FooterInner to={item.path}>
        <div>
          <a href={item.path}>{item.icon}</a>
        </div>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
