import { useGetData } from "../../useGetData";
import { Card } from "../Components/Card/Card";

const Home = () => {
  const [characters, setCharacters] = useGetData(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <>
      {characters.map((character) => {
        return <Card key={character.id} character={character} />;
      })}
    </>
  );
};

export { Home };

// characters.length > 0 && characters[0].name
