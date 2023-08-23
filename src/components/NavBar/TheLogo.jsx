import styled from "styled-components"; //stiluska

const Logo = styled.div`
  background-color: #242633;
  color: white;
  height: 80px;
  position: fixed;
  width: 100%;
  display: flex;
`;

const Imagem = styled.img`
  height: 80px;
`;

const TheLogo = () => {
  return (
    <div>
      <Logo>
        <a href="/">
          <Imagem src={require("./potter-logo.png")} alt="pic"></Imagem>
        </a>
      </Logo>
    </div>
  );
};

export default TheLogo;
