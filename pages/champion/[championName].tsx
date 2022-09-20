import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
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

  const { data, status, isLoading, error, isFetching } = useQuery(
    [championName],
    fetchChampions,
    { enabled: router.isReady }
  );

  useEffect(() => {
    if (data !== undefined) setChamp(data[championName as string]);
  }, [data]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <img src={championAvatarAPI + champ?.id + '.png'} />
      <div>{champ?.name}</div>
      <div>{champ?.title}</div>
      <div>{champ?.lore}</div>
    </>
  );
};

export default Champion;
