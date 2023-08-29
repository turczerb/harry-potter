import { useState } from "react";
import styled from "styled-components"; //css

const OutContainer = styled.div`
  border: 1px solid blue;
  padding: 15px;
  width: 60%;
`;

const InnerContainer = styled.div``;
const Picture = styled.img`
  height: 300px;
`;

const TitleContainer = styled.div``;
const MoreInfoContainer = styled.div``;

const Person = (props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <OutContainer>
      <InnerContainer>
        <TitleContainer>
          <Picture src={props.image} alt="pic" />
          <h2>{props.name}</h2>
        </TitleContainer>
        <MoreInfoContainer>
          <p> House {props.house}</p>
          <p> Date of birth {props.dateOfBirth}</p>
          <p> Patronus {props.patronus}</p>
          <p> Actor {props.actor}</p>
        </MoreInfoContainer>
      </InnerContainer>
      <button>Show more</button>
    </OutContainer>
  );
};

export default Person;
