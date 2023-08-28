import styled from "styled-components"; //css
import { useParams } from "react-router-dom";
import { BookData } from "./BookData";
const images = require.context("../../images");

const OutContainer = styled.div`
  padding-top: 200px;
  background-color: black;
  dispay: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div``;

const Title = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;

const Stori = styled.div`
  color: white;
  font-family: "Sofia Pro", serif;
  font-size: 24px;
  padding: 10px;
  max-width: 45em;
  //text-align: center;
  text-align: left;
  margin: 0.55556em auto 0px;
  letter-spacing: 0.5px;
  line-height: 36px;
`;

const Picture = styled.img`
  height: 600px;
  border-radius: 13px;
`;

function findBook(title) {
  for (let i = 0; i < BookData.length; i++) {
    for (let j = 0; j < BookData[i].bookTypes.length; j++) {
      if (BookData[i].bookTypes[j].title === title) {
        return BookData[i].bookTypes[j];
      }
    }
  }
}

const BookMore = () => {
  const { title } = useParams();
  //const thisBook = BookData[0].bookTypes.find((prod) => prod.title === title);
  const item = findBook(title);
  let img = images(item.image);

  return (
    <OutContainer>
      <InnerContainer>
        <Title>
          <div></div>
          <div>
            <Picture src={img} alt="pic"></Picture>
          </div>
          <div>
            <h1>{item.title}</h1>
          </div>
          <div></div>
        </Title>
      </InnerContainer>
      <Stori>{item.story} </Stori>
    </OutContainer>
  );
};

export default BookMore;
