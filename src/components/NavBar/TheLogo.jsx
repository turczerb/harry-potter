import styled from "styled-components"; //stiluska

const Logo = styled.div`
  background-color: #242633;
  color: white;
  height: 60px;
  position: fixed;
  width: 100%;
  display: flex;
`;

const TheLogo = () => {
  return (
    <div>
      <Logo>
        <div>itt lesz a logónk</div>
      </Logo>
    </div>
  );
};

export default TheLogo;
