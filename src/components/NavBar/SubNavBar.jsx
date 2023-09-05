import { useState } from "react"; //nyitva vagy csukva van a sub nav bár
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import styled from "styled-components"; //css
import useComponentVisible from "../../hooks/useComponentVisible";
const images = require.context("../../images");

//Book/Characters felirat csak az semmi más
const Element = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    border-bottom: 2px solid #946b2d;
  }
`;

const ElementConti = styled.div`
  &:hover {
    border-bottom: 2px solid #946b2d;
    background-color: #414757;
    cursor: pointer;
  }
`;

const DropDownContainer = styled.div`
  position: absolute; //Changed
  display: block;
  z-index: 1;
  display: flex;
  justify-content: center;
  webkit-flex-direction: row;
  text-align: center;
  transform: translate(-40%);
  background-color: rgba(255, 255, 255, 0.3);
`;

const SubElement = styled(Link)`
  text-decoration: none;
  //margin:5px;
  color: white;

  

  &:hover {
    border-bottom: 2px solid #946b2d;
    background-color: #414757;
    cursor: pointer;
`;

const Picture = styled.img`
  height: 110px;
  margin: 10px;
  width: 110px;
`;

const Title = styled.div`
  display: flex;
  place-items: center;
  justify-content: space-evenly;
`;

const SubNavBar = ({ item }) => {
  //ez itt miért is kell??
  const [showSubElement, setShowSubElement] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const showTheElement = () => {
    //ez mindig az ellen tettjére fogja változtatni a statet.ezt most kikötöttem a másik state van
    setShowSubElement(!showSubElement);
    console.log("ide bejövök v mivan");
    console.log(showSubElement);
  };

  const showComponent = (e) => {
    e.preventDefault();
    console.log("lapát");
    setIsComponentVisible(!isComponentVisible);
    console.log(isComponentVisible);
  };

  return (
    //na itt ternaryval: valami
    <div ref={ref}>
      <Element to={item.path} onClick={item.subNav && showComponent}>
        <div>
          <span>{item.title}</span>
          {item.subNav && isComponentVisible
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
          <DropDownContainer>
            {isComponentVisible &&
              item.subNav.map((item, index) => {
                let img = images(item.image);
                return (
                  <SubElement to={item.path} key={index}>
                    <Title>{item.title}</Title>
                    <Picture src={img} alt="pic" />
                  </SubElement>
                );
              })}
          </DropDownContainer>
        </div>
      </Element>
    </div>
  );
};

export default SubNavBar;
