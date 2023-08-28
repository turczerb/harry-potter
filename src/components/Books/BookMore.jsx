import styled from "styled-components"; //css
import { useParams } from "react-router-dom";
import { BookData } from "./BookData";

const OutContainer = styled.div`
  padding-top: 200px;
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

  return (
    <OutContainer>
      <div>{item.title} </div>
      <div>{item.story} </div>
    </OutContainer>
  );
};

export default BookMore;
