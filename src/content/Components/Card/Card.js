import { useState } from "react";
import styled from "styled-components";

const Card = ({ characters }) => {
  const [showInfo, setShowInfo] = useState(true);
  console.log(characters);
  return characters.map((character) => (
    <CardContainer>
      <CardName>{character.name}</CardName>
      <CardPicture src={character.image} />
      <CardButtonSeeMore
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        See more
      </CardButtonSeeMore>
      {showInfo && (
        <CardInfoContainer>
          <CardInfoTag>male</CardInfoTag>
          <CardInfoTag>alive</CardInfoTag>
          <CardInfoTag>human</CardInfoTag>
        </CardInfoContainer>
      )}
    </CardContainer>
  ));
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  border: 1px solid black;
  margin-top: 5px;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
`;

const CardInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
`;

const CardName = styled.h2``;

const CardPicture = styled.img`
  border-radius: 5px;
`;

const CardInfoTag = styled.div``;

const CardButtonSeeMore = styled.button`
  margin-top: 20px;
`;

export { Card };
