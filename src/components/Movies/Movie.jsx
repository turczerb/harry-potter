import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import styled from "styled-components"; //css
const images = require.context("../../images"); //képek ezzal a változóvaé jönnek be

const OutContainer = styled.div``;
const InnerContainer = styled.div``;
const Picture = styled.img``;
const Title = styled.h4``;

const Movie = ({ item }) => {
  let img = images(item.image);
  return (
    <div>
      <OutContainer to={item.title}>
        <InnerContainer>
          <Picture src={img} alt="pic"></Picture>
          <Title>{item.title}</Title>
        </InnerContainer>
      </OutContainer>
    </div>
  );
};

export default Movie;
