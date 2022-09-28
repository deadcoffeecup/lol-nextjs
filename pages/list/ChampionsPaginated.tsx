import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { championAvatarAPI } from '../../constants/apis';
import { useTheme } from '../../contexts/theme/ThemeContext';
import { getChampions } from '../../hooks/getChampions';
import { ChampionType } from '../../types/champion-data.types';

export const ChampionsPaginated = ({ type }) => {
  const { data, isLoading } = getChampions();
  const router = useRouter();
  const NUMBER_OF_SHOWED_CHAMPS = 24;
  const [championsCount, setChampionsCount] = useState<number>(
    NUMBER_OF_SHOWED_CHAMPS
  );
  const [showedData, setShowedData] = useState<ChampionType[]>(
    [] as ChampionType[]
  );

  useEffect(() => {
    if (data) {
      setShowedData(
        Array.from(Object.values(data.data) as ChampionType[])
          .filter((el) => {
            return !type ? el : el.tags.includes(type);
          })
          .slice(championsCount - NUMBER_OF_SHOWED_CHAMPS, championsCount)
      );
    }
  }, [data, championsCount, type]);

  const { themeMode } = useTheme();
  return (
    <div className='container'>
      <div>
        <button
          onClick={() =>
            setChampionsCount((prev) => {
              return Math.max(
                prev - NUMBER_OF_SHOWED_CHAMPS,
                NUMBER_OF_SHOWED_CHAMPS
              );
            })
          }
        >
          prev
        </button>
        <button
          onClick={() =>
            setChampionsCount((prev) => {
              return Math.min(
                prev + NUMBER_OF_SHOWED_CHAMPS,
                Object.values(data.data).length
              );
            })
          }
        >
          next
        </button>
      </div>
      <div className='champs'>
        {isLoading && <h2>Loading...</h2>}

        {showedData?.map((champion: ChampionType) => (
          <div className='champ' key={champion.id}>
            <div>{champion.name}</div>
            <img
              style={{ cursor: 'pointer' }}
              onClick={() => router.replace(`/champion/${champion.id}`)}
              src={championAvatarAPI + champion.id + '.png'}
            />

            <ul>
              {champion.tags.map((tagName) => (
                <li
                  style={{ cursor: 'pointer' }}
                  onClick={() => router.replace(`/list/${tagName}`)}
                  key={tagName}
                >
                  {tagName}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <style jsx>{`
          .container {
            margin: 0 50px;
          }
          .champs {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
          .champ {
            background-color: #2222;
            border-radius: 5px;
            padding: 20px;
            text-align: center;
            max-width: 30%;
          }
          img {
            border-radius: 5px;
          }
        `}</style>
      </div>
    </div>
  );
};
