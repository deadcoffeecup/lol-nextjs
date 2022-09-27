import React, { useEffect, useRef, useState } from 'react';
import { championAvatarAPI } from '../../constants/apis';
import { getChampions } from '../../hooks/getChampions';
import { useInterSectionObserver } from '../../hooks/useInterSectionObserver';
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

  useInterSectionObserver({
    elementRef,
    setChampionsCount,
    NUMBER_OF_SHOWED_CHAMPS,
  });

  useEffect(() => {
    if (data !== undefined) {
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
        {showedData?.map((champion: ChampionType) => (
          <div className='champ' key={champion.id}>
            <div>{champion.name}</div>
            <img src={championAvatarAPI + champion.id + '.png'} />
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
export default LazyChampionsPaginated;
