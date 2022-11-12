import { useGetData } from "../../useGetData";
import { Card } from "../Components/Card/Card";
import styled from "styled-components";

const Home = () => {
  const [characters, setCharacters] = useGetData(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <CardWrapper>
      {characters.map((character) => {
        return <Card key={character.id} character={character} />;
      })}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 140px 0px;
`;

export { Home };

// characters.length > 0 && characters[0].name
