import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { championsAPI } from '../constants/apis';

export const getChampions = () => {
  const { data, status, isLoading, error, isFetching } = useQuery(
    ['champions'],
    () => axios.get(championsAPI).then((res) => res.data)
  );
  return { data, status, isLoading, error, isFetching };
};
