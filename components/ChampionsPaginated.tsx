import React, { useEffect, useState } from 'react';
import { championAvatarAPI } from '../constants/apis';
import { getChampions } from '../hooks/getChampions';
import { ChampionType } from '../types/champion-data.types';

export const ChampionsPaginated = () => {
  const { data, isLoading } = getChampions();

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
      {isLoading && <h2>Loading...</h2>}
      {showedData?.map((champion: ChampionType) => (
        <div key={champion.id}>
          <div>Name: {champion.name}</div>
          <img src={championAvatarAPI + champion.name + '.png'} />
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
