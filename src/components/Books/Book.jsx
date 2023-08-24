import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import styled from "styled-components"; //css

//ez az ami az egész 1db könyv kártyát tartalmazza
const ProductCard = styled.div``;

const ProductCardInner = styled.div``;

const Book = ({ item }) => {
  return (
    <ProductCard>
      <ProductCardInner>
        <a>
          <div>
            <div>
              <div>kép</div>
            </div>
            <div>
              <h4></h4>
            </div>
          </div>
        </a>
      </ProductCardInner>
    </ProductCard>
  );
};

export default Book;
