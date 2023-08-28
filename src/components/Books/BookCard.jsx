import Book from "./Book";
import { BookData } from "./BookData";
import styled from "styled-components"; //stiluska
const imag = require.context("../../images");

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
  font-size: 40px;
  font-family: Bluu Next, serif;
`;

const Picture = styled.img`
  height: 170px;
`;

const Container = styled.div`
  //display: flex;
  // flex-direction: row;

  padding: 20px;
  margin-top: 150px;
  background-color: black;
  text-decoration: none;
  color: white;
`;

const SectionContainer = styled.div``;

const SectionBodyContainer = styled.div`
  //display: flex;
  // flex-direction: row;

  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(90%/3, max(14px, 90%/4)), 1fr)
  );
  grid-gap: 5px;
  padding: 20px;
  margin-top: 150px;
  background-color: black;
  text-decoration: none;
  color: white;
`;

const BookCard = () => {
  return (
    <Container>
      {BookData.map((item, index) => {
        return (
          <SectionContainer>
            <div>
              <SectionHeader>
                {item.type}
                <Picture src={imag(item.img)} alt="pic"></Picture>
              </SectionHeader>
            </div>
            <SectionBodyContainer>
              {item.bookTypes.map((book, index2) => {
                return (
                  <div>
                    <Book item={book} key={index + index2} />{" "}
                  </div>
                );
              })}
            </SectionBodyContainer>
          </SectionContainer>
        );
      })}
    </Container>
  );
};

export default BookCard;
