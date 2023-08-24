import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import styled from "styled-components"; //css
const images = require.context("../../images");

//ez az ami az egész 1db könyv kártyát tartalmazza
const ProductCard = styled.div``;

const ProductCardInner = styled.div``;

const KlikkContainer = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Nemtom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img`
  height: 400px;
`;

const Book = ({ item }) => {
  let img = images(item.image);
  return (
    <ProductCard>
      <ProductCardInner>
        <KlikkContainer to={item.path}>
          <Nemtom>
            <div>
              <Picture src={img} alt="pic"></Picture>
            </div>
            <div>
              <h4>{item.title}</h4>
            </div>
          </Nemtom>
        </KlikkContainer>
      </ProductCardInner>
    </ProductCard>
  );
};

export default Book;
