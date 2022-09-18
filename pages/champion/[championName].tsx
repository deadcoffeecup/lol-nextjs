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
  const fetchChampions = async () => {
    if (ready) {
      return await axios
        .get(championAPI + championName + '.json')
        .then((res) => res.data)
        .then((res) => res.data);
    } else {
      console.log('championName is undefined');
    }
  };

  useEffect(() => {
    if (router.isReady) setReady(() => true);
  }, [router.isReady]);

  const { data, status, isLoading, error, isFetching } = useQuery(
    ['champions'],
    fetchChampions
  );
  console.log(data);

  return <>{data?.championName?.name}</>;
};

export default Champion;
