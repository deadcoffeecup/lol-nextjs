import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { championsAPI, championAvatarAPI } from '../../constants/apis';
import Image from 'next/image';

type ChampionType = {
  blurb: string;
  id: string;
  image: ChampionImageType;
  info: ChampionInfoType;
  key: string;
  name: string;
  partype: string;
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
  };
  tags: string[];
  title: string;
  version: string;
};

interface ChampionInfoType {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}
interface ChampionImageType {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export const List = () => {
  const { fetchedData } = useFetch(championsAPI);
  const [championsArr, setChampionsArr] = useState<ChampionType[]>([]);
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
          <img src={championAvatarAPI + championData.name + '.png'} />
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
