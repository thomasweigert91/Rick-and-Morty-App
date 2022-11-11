import { useGetData } from "../../useGetData";
import { Card } from "../Components/Card/Card";

const Home = () => {
  const [characters, setCharacters] = useGetData(
    "https://rickandmortyapi.com/api/character"
  );

  return <Card characters={characters} />;
};

export { Home };

// characters.length > 0 && characters[0].name
