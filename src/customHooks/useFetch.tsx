import { useEffect, useState } from "react";

function useFetch( url: string ) {
  const [data, setData] = useState<JSON | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        console.log(json)
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [url]);

  return [data, error, isLoading];
}

export default useFetch;