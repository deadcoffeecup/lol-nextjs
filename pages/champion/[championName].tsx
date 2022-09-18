import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const championAPI =
  'http://ddragon.leagueoflegends.com/cdn/12.17.1/data/en_US/champion/';

const Champion = () => {
  const router = useRouter();
  const { championName } = router.query;
  const [ready, setReady] = useState(false);
  const fetchChampions = async () =>
    await axios
      .get(championAPI + championName + '.json')
      .then((res) => res.data)
      .then((res) => res.data);

  const query = useQuery(['champions'], fetchChampions, { enabled: ready });

  useEffect(() => {
    if (router.isReady) setReady(() => true);
  }, [router.query.championName]);

  // const { data, status, isLoading, error, isFetching } =
  if (championName !== undefined) {
    console.log('championName = ' + championName);
    console.log(query.data);
  }

  return <div>{query.data?.championName?.name}</div>;
};

export default Champion;
