import React, { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { championsAPI, championAvatarAPI } from '../constants/apis';
import Image from 'next/image';
import { ChampionType } from '../types/champion-data.types';
import { useRouter } from 'next/router';

export const List = () => {
  const { fetchedData } = useFetch(championsAPI);
  const [championsArr, setChampionsArr] = useState<ChampionType[]>([]);
  const router = useRouter();
  useEffect(() => {
    if (!!Object.keys(fetchedData).length) {
      setChampionsArr(Object.values(fetchedData.data));
    }
  }, [fetchedData]);
  console.log(championsArr);
  return (
    <div>
      {championsArr.map((championData: ChampionType) => (
        <div key={championData.id}>
          <img
            src={championAvatarAPI + championData.id + '.png'}
            style={{ cursor: 'pointer' }}
            onClick={() => router.push(`champion/${championData.id}`)}
          />
          <div>Name: {championData.name}</div>
          <div>Motto: {championData.blurb}</div>

          <ul>
            {championData.tags.map((tagName) => (
              <li key={tagName}>{tagName}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};