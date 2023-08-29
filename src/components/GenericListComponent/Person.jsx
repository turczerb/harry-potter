import { useState } from "react";
import styled from "styled-components"; //css

const OutContainer = styled.div`
  /6border: 1px solid blue;
  padding: 15px;
  width: 80%;
`;

const InnerContainer = styled.div`
  display: flex;
`;
const Picture = styled.img`
  margin-right: 15px;
  width: 270px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MoreInfoContainer = styled.div``;

const Person = (props) => {
  const [showMore, setShowMore] = useState(false);

  return showMore ? (
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
      <button onClick={() => setShowMore(!showMore)}>Show less</button>
    </OutContainer>
  ) : (
    <OutContainer>
      <InnerContainer>
        <TitleContainer>
          <Picture src={props.image} alt="pic" />
          <h2>{props.name}</h2>
        </TitleContainer>
      </InnerContainer>
      <button onClick={() => setShowMore(!showMore)}>Show more</button>
    </OutContainer>
  );
};

export default Person;
