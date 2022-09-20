import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { championAvatarAPI } from '../constants/apis';
import { getChampions } from '../hooks/getChampions';
import { ChampionType } from '../types/champion-data.types';

export const ChampionsPaginated = () => {
  const { data, isLoading } = getChampions();
  const router = useRouter();
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
    <div className='champs'>
      {isLoading && <h2>Loading...</h2>}
      {showedData?.map((champion: ChampionType) => (
        <div className='champ' key={champion.id}>
          <div>Name: {champion.name}</div>
          <img
            onClick={() => router.push(`champion/${champion.id}`)}
            src={championAvatarAPI + champion.name + '.png'}
          />
          <div>Motto: {champion.lore}</div>
          <ul>
            {champion.tags.map((tagName) => (
              <li key={tagName}>{tagName}</li>
            ))}
          </ul>
        </div>
      ))}

      <style jsx>{`
        .champs {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .champ {
          background-color: #2222;
          border-radius: 5px;
          padding: 20px;
          text-align: center;
          max-width: 30%;
        }
      `}</style>
    </div>
  );
};
