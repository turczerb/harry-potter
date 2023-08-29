import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); //data store meg set . useEffect:account the changes

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [url]);
  return { data };
};

export default useFetch;
