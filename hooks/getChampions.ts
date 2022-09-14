import { useQuery } from '@tanstack/react-query';
import { championsAPI } from '../constants/apis';

import axios from 'axios';

export const getChampions = () => {
  const { data, status, isLoading, error, isFetching } = useQuery(
    ['champions'],
    () => axios.get(championsAPI).then((res) => res.data)
  );
  return { data, status, isLoading, error, isFetching };
};
