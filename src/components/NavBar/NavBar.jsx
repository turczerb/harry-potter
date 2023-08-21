import styled from "styled-components"; //stiluska
import { NavBarData } from "./NavBarData"; //ez itt maga a data amin majd mappelünk
import SubNavBar from "./SubNavBar"; //component
import TheLogo from "../TheLogo";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Navi = styled.nav`
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  position: relative;
  height: 60px;
`;

const NavBar = () => {
  return (
    <Container>
      <TheLogo />
      <Navi>
        {NavBarData.map((item, index) => {
          return <SubNavBar item={item} key={index} />;
        })}
      </Navi>
    </Container>
  );
};

export default NavBar;
