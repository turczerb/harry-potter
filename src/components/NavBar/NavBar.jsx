import styled from "styled-components"; //stiluska
import { NavBarData } from "./NavBarData"; //ez itt maga a data amin majd mappelünk
import SubNavBar from "./SubNavBar"; //component
import TheLogo from "../TheLogo";

const Navi = styled.nav`
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  position: fixed;
  height: 60px;
`;

const NavBar = () => {
  return (
    <>
      <TheLogo />
      <Navi>
        {NavBarData.map((itemke, index) => {
          return <SubNavBar item={itemke} key={index} />;
        })}
      </Navi>
    </>
  );
};

export default NavBar;
