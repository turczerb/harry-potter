import Book from "./Book";
import { BookData } from "./BookData";

const BookCard = () => {
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default BookCard;
