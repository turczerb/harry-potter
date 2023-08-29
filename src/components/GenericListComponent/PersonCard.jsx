import Person from "./Person";
//search bart nem találta
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"; //css
const images = require.context("../../images");

const Container = styled.div`
  width: 100%;
  background-color: black;
  padding-top: 250px;
  padding-bottom: 60px;
`;

const OutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  color: white;
  place-items: center;
  margin-left: 60px;
`;

const PersonCard = () => {
  const { path } = useParams();
  const [url, setUrl] = useState(
    "https://hp-api.onrender.com/api/characters/" + path
  );
  const { data } = useFetch(url);

  console.log(data);

  return (
    <Container>
      <OutContainer>
        {data && data.image
          ? data &&
            data.slice(0, 9).map((item, index) => {
              return (
                <Person
                  key={index}
                  image={item.image}
                  name={item.name}
                  house={item.house}
                  dateOfBirth={item.dateOfBirth}
                  patronus={item.patronus}
                  actor={item.actor}
                />
              );
            })
          : data &&
            data.slice(0, 9).map((item, index) => {
              // let img = images(item.image);
              return (
                <Person
                  key={index}
                  image={item.image}
                  name={item.name}
                  house={item.house}
                  dateOfBirth={item.dateOfBirth}
                  patronus={item.patronus}
                  actor={item.actor}
                />
              );
            })}
      </OutContainer>
    </Container>
  );
};

export default PersonCard;
