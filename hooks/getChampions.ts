import { useQuery } from '@tanstack/react-query';
import { championsAPI } from '../constants/apis';

import axios from 'axios';

export const getChampions = () => {
  const { data, status } = useQuery(['champions'], () =>
    axios.get(championsAPI).then((res) => res.data)
  );
  return { data };
};
