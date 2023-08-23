import styled from "styled-components"; //stiluska

const TextStyle = styled.p`
  color: white;
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
