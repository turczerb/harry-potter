import Book from "./Book";
import { BookData } from "./BookData";
import styled from "styled-components"; //stiluska

const Container = styled.div`
  //width: 100%;
  //display: flex;
  // flex-direction: row;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 20px;
  margin: 10px;
`;

const BookCard = () => {
  return (
    <Container>
      {BookData.map((item, index) => {
        return item.bookTypes.map((book, index2) => {
          return (
            <div>
              {" "}
              <Book item={book} key={index + index2} />{" "}
            </div>
          );
        });
      })}
    </Container>
  );
};

export default BookCard;
