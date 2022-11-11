import { useGetData } from "../../useGetData";

const Home = () => {
  const { res } = useGetData();
  return <div>{res?.[0].name}</div>;
};

export { Home };
