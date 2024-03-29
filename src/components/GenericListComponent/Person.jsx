import { useState } from "react";
import styled from "styled-components"; //css
import useSound from "use-sound";
import magic from "../../sounds/magic.wav";
const images = require.context("../../images/");

const OutContainer = styled.div`
  /6border: 1px solid blue;
  padding: 15px;
  width: 80%;
  font-family: Sofia Pro, serif;
`;

const InnerContainer = styled.div`
  display: flex;
`;
const Picture = styled.img`
  margin-right: 15px;
  width: 270px;
  border-radius: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.button`
  background-color: grey;
  font-family: Sofia Pro, serif;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  border-radius: 30px;
  border: 1px solid transparent;
  padding: 10px 25px 12px;
`;
const MoreInfoContainer = styled.div``;

const SmlPic = styled.img`
  width: 150px;
`;

const Person = (props) => {
  let img = images("./potter-logo.png");
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
          <Btn onClick={() => checkMore()}>
            <span>Show less</span>
          </Btn>
        </TitleContainer>

        <MoreInfoContainer>
          <p> House {props.house}</p>
          <p> Date of birth {props.dateOfBirth}</p>
          <p> Patronus {props.patronus}</p>
          <p> Actor {props.actor}</p>
          <SmlPic src={img} alt="pic" />
        </MoreInfoContainer>
      </InnerContainer>
    </OutContainer>
  ) : (
    <OutContainer>
      <InnerContainer>
        <TitleContainer>
          <Picture src={props.image} alt="pic" />
          <h2>{props.name}</h2>
          <Btn onClick={() => checkMore()}>
            <span>Show more</span>
          </Btn>
        </TitleContainer>
      </InnerContainer>
    </OutContainer>
  );
};

export default Person;
