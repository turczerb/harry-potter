import styled from "styled-components"; //stiluska

const FooterText = ({ item }) => {
  return (
    <div>
      <p>{item.title}</p>
      <p>{item.text}</p>
      <p>{item.undertext}</p>
    </div>
  );
};

export default FooterText;
