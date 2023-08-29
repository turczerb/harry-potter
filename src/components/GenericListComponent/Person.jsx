import { useState } from "react";
import styled from "styled-components"; //css
import useSound from "use-sound";
import magic from "../../sounds/magic.wav";

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
  align-items: center;
`;

const Btn = styled.button`
  background-color: grey;
`;
const MoreInfoContainer = styled.div``;

const Person = (props) => {
  const [showMore, setShowMore] = useState(false);
  const [play] = useSound(magic);

  const checkMore = () => {
    setShowMore(!showMore);
    play();
  };

  return showMore ? (
    <OutContainer>
      <InnerContainer>
        <TitleContainer>
          <Picture src={props.image} alt="pic" />
          <h2>{props.name}</h2>
          <Btn onClick={() => checkMore()}>Show less</Btn>
        </TitleContainer>

        <MoreInfoContainer>
          <p> House {props.house}</p>
          <p> Date of birth {props.dateOfBirth}</p>
          <p> Patronus {props.patronus}</p>
          <p> Actor {props.actor}</p>
        </MoreInfoContainer>
      </InnerContainer>
    </OutContainer>
  ) : (
    <OutContainer>
      <InnerContainer>
        <TitleContainer>
          <Picture src={props.image} alt="pic" />
          <h2>{props.name}</h2>
          <Btn onClick={() => checkMore()}>Show more</Btn>
        </TitleContainer>
      </InnerContainer>
    </OutContainer>
  );
};

export default Person;
