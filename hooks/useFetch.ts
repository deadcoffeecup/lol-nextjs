import { useEffect, useState } from 'react';

import { championsAPI as champsAPI } from './consts';

export const useFetch = () => {
  const [champsArr, setChampsArr] = useState({});

  useEffect(() => {
    setTimeout(() => {
      fetch(champsAPI)
        .then((res) => res.json())
        .then((json) => setChampsArr(json.data))
        .catch((err) => console.error('Fetch error:' + err));
    }, 200);
  }, []);

  return { champsArr };
};
