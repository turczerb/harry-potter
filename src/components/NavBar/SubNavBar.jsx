import { useState } from "react"; //nyitva vagy csukva van a sub nav bár
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import styled from "styled-components"; //css

const Element = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    border-bottom: 2px solid #946b2d;
  }
`;

const DropDownContainer = styled.div``;

const SubElement = styled(Link)``;

const SubNavBar = ({ item }) => {
  //ez itt miért is kell??
  const [showSubElement, setShowSubElement] = useState(false);

  const showTheElement = () => {
    //ez mindig az ellen tettjére fogja változtatni a statet.
    setShowSubElement(!showSubElement);
  };

  return (
    <div>
      <Element to={item.path} onClick={showTheElement}>
        <span>{item.title}</span>
      </Element>
    </div>
  );
};

export default SubNavBar;
