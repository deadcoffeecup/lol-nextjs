import { useEffect, useState } from 'react';

export const useFetch = (API: string) => {
  const [fetchedData, setFetchedData] = useState<any>({});
  useEffect(() => {
    setTimeout(() => {
      fetch(API)
        .then((res) => res.json())
        .then((json) => setFetchedData(json))
        .catch((err) =>
          console.error(`Fetch error with: \n ${API} \n ${err} `)
        );
    }, 100);
  }, []);
  return { fetchedData };
};

export const fetchData = async (API: string) =>
  await fetch(API)
    .then((res) => res.json())
    .catch((err) => console.error(`Fetch error with: \n ${API} \n ${err} `));
