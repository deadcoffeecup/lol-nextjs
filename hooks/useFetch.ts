import { useEffect, useState } from 'react';

export const useFetch = (API: string) => {
  const [fetchedObj, setFetchedObj] = useState({});
  useEffect(() => {
    setTimeout(() => {
      fetch(API)
        .then((res) => res.json())
        .then((json) => setFetchedObj(json))
        .catch((err) =>
          console.error(`Fetch error with: \n ${API} \n ${err} `)
        );
    }, 100);
  }, []);
  return { fetchedObj };
};
