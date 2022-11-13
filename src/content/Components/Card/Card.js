import { useState } from "react";
import styled from "styled-components";
import { GiLifeBar } from "react-icons/gi";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";

const Card = ({ character }) => {
  const [showInfo, setShowInfo] = useState(false);
  function isMaleFemale(character) {
    if (character.gender === "male") {
      return <BsGenderMale transform="scale(1.2)" color="#FFEAEE" />;
    } else {
      return <BsGenderFemale transform="scale(1.2)" color="#FFEAEE" />;
    }
  }

  return (
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
          <CardInfoTag>
            {isMaleFemale(character)}
            <InfoText>{character.gender}</InfoText>
          </CardInfoTag>
          <CardInfoTag>
            <GiLifeBar transform="scale(1.2)" color="#FFEAEE" />
            <InfoText>{character.status}</InfoText>
          </CardInfoTag>
          <CardInfoTag>
            <BsFillPeopleFill transform="scale(1.2)" color="#FFEAEE" />
            <InfoText>{character.species}</InfoText>
          </CardInfoTag>
        </CardInfoContainer>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  border: 1px solid black;
  flex-direction: column;
  margin-top: 50px;
  padding: 10px 30px;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colorSecond};
  background-color: ${(props) => props.theme.colorSecond};
  box-shadow: 1px 2px 5px black;
  transition: 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;

const InfoText = styled.div`
  margin-left: 10px;
  color: ${(props) => props.theme.colorLight};
`;

const CardInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
`;

const CardName = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colorThird};
`;

const CardPicture = styled.img`
  border-radius: 5px;
`;

const CardInfoTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colorDark};
  padding: 10px;
  border-radius: 10px;
  margin: 0px 5px;
  border: 1px solid ${(props) => props.theme.colorLight};
`;

const CardButtonSeeMore = styled.div`
  margin-top: 20px;
  border: 1px solid black;
  padding: 10px 25px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colorLight}; ;
`;

export { Card };
