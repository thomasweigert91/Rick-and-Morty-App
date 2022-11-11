import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setRes(data.results);
    }
    fetchData();
  }, [url]);

  return [res, setRes];
};

export { useGetData };
