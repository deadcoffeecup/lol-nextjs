import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { championAvatarAPI } from '../../constants/apis';
import { ChampionType } from '../../types/champion-data.types';

const championAPI =
  'http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/';

const Champion = () => {
  const router = useRouter();
  const { championName } = router.query;
  const [champ, setChamp] = useState<ChampionType>();

  const fetchChampions = async () =>
    await axios
      .get(championAPI + championName + '.json')
      .then((res) => res.data.data);

  const { data, isLoading } = useQuery([championName], fetchChampions, {
    enabled: router.isReady,
    onError: (error) => {
      console.warn(error);
    },
  });

  useEffect(() => {
    if (data) setChamp(data[championName as string]);
  }, [data]);

  return (
    <div>
      <div className='champ'>
        {isLoading && <h2>Loading...</h2>}
        <img src={championAvatarAPI + champ?.id + '.png'} />
        <h1>{champ?.name}</h1>
        <h2>{champ?.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: champ?.lore }}></div>
        <Link href={'/list'}>{`<- go back`}</Link>
      </div>
      <style jsx>{`
        .champ {
          background-color: #2222;
          border-radius: 5px;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Champion;
