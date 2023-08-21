import styled from "styled-components"; //stiluska

const Logo = styled.div`
  background-color: #242633;
  color: white;
  height: 80px;
  display: gird;
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
