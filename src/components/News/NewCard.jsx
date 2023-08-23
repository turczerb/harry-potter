import New from "./New";
import styled from "styled-components";
import img from "./daily-prophet.png";

const NewCardContainer = styled.div`
  background-image: url(${img});
  height: 1800px;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: black;
  background-position: center;
  margin-top: 150px;
`;
const NewCard = () => {
  return (
    <NewCardContainer>
      <div></div>
    </NewCardContainer>
  );
};

export default NewCard;
