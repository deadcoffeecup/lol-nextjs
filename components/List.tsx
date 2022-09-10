import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { championsAPI } from '../constants/apis';

export const List = () => {
  const { fetchedData } = useFetch(championsAPI);
  const [championsArr, setChampionsArr] = useState<any>([]);
  useEffect(() => {
    if (!!Object.keys(fetchedData).length) {
      setChampionsArr(Object.values(fetchedData.data));
    }
  }, [fetchedData]);

  console.log(championsArr);

  return <div>List</div>;
};
