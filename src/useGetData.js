import { useEffect, useState } from "react";

const useGetData = () => {
  const [res, setRes] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setRes(data.results);
    console.log(res);
  }
  return { res };
};

export { useGetData };
