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

  return (
    <>
      <div className='champs'>
        {championsArr.map((championData: ChampionType) => (
          <div key={championData.id} className='champ'>
            <img
              src={championAvatarAPI + championData.id + '.png'}
              style={{ cursor: 'pointer', borderRadius: '5px' }}
              onClick={() => router.push(`champion/${championData.id}`)}
            />
            <div>Name: {championData.name}</div>

            <ul>
              {championData.tags.map((tagName) => (
                <li key={tagName}>{tagName}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style jsx>{`
        .champs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }
        .champ {
          background-color: #2222;
          border-radius: 5px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};
