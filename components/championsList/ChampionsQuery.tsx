import { QueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getChampions } from '../../hooks/getChampions';
import { ChampionType } from './List';

export const ChampionsQuery = () => {
  const { data } = getChampions();

  const [championsCount, setChampionsCount] = useState<number>(5);
  const [showedData, setShowedData] = useState<ChampionType[]>(
    [] as ChampionType[]
  );
  useEffect(() => {
    if (data !== undefined) {
      setShowedData(
        Array.from(Object.values(data.data)).slice(
          0,
          championsCount
        ) as ChampionType[]
      );
    }
  }, [data]);

  return (
    <div>
      {showedData?.map((champion: ChampionType) => (
        <div key={champion.id}>
          <div>Name: {champion.name}</div>
          <div>Motto: {champion.blurb}</div>
          <ul>
            {champion.tags.map((tagName) => (
              <li key={tagName}>{tagName}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
