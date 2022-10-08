import React, { useEffect, useRef, useState } from 'react';
import { championAvatarAPI } from '../../constants/apis';
import { getChampions } from '../../hooks/getChampions';

import { ChampionType } from '../../types/champion-data.types';

const LazyChampionsPaginated = ({}) => {
  const { data, isLoading } = getChampions();
  const elementRef = useRef(null);

  const NUMBER_OF_SHOWED_CHAMPS = 5;
  const [championsCount, setChampionsCount] = useState<number>(
    NUMBER_OF_SHOWED_CHAMPS
  );
  const [showedData, setShowedData] = useState<ChampionType[]>(
    [] as ChampionType[]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setChampionsCount((prev) => prev + 1);
          console.log(entries[0].target);
        }
      },
      {
        // root,
        // rootMargin: '50px',
        threshold: 1,
      }
    );
    elementRef.current && observer.observe(elementRef.current);

    return () => {
      elementRef.current && observer.disconnect();
    };
  }, [elementRef]);

  useEffect(() => {
    if (data) {
      setShowedData(
        Array.from(Object.values(data.data) as ChampionType[]).slice(
          0,
          championsCount
        )
      );
    }
  }, [data, championsCount]);

  return (
    <div className='container'>
      {isLoading && <h2>Loading...</h2>}
      <div ref={elementRef} className='champs'>
        {showedData?.map((champion: ChampionType, index) => (
          <div className='champ' key={champion.id}>
            <img
              alt={champion.name}
              src={championAvatarAPI + champion.id + '.png'}
            />
            <div>{champion.name}</div>
            <ul>
              {champion.tags.map((tagName) => (
                <li key={tagName}>{tagName}</li>
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
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
          }
          .champ {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #2222;
            border-radius: 5px;
            padding: 20px 70px;
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
export default LazyChampionsPaginated;
