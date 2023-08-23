import styled from "styled-components"; //stiluska

const TextStyle = styled.p`
  letter-spacing: 0.25px;
  color: #9fa1ad;
`;

const FooterText = ({ item }) => {
  return (
    <TextStyle>
      <p>{item.title}</p>
      <p>{item.text}</p>
      <p>{item.undertext}</p>
    </TextStyle>
  );
};

export default FooterText;
