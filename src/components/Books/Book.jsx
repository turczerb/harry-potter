import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import styled from "styled-components"; //css
const images = require.context("../../images"); //képek ezzal a változóvaé jönnek be

//ez az ami az egész 1db könyv kártyát tartalmazza
const ProductCard = styled.div`
  margin: 5px;
`;

const KlikkContainer = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Nemtom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img`
  height: 400px;
  border-radius: 10px;
`;

const Title = styled.h4`
text:align:center;
`;

const Book = ({ item }) => {
  let img = images(item.image);
  return (
    <ProductCard>
      <KlikkContainer to={item.title}>
        <Nemtom>
          <Picture src={img} alt="pic"></Picture>

          <Title>{item.title}</Title>
        </Nemtom>
      </KlikkContainer>
    </ProductCard>
  );
};

export default Book;
