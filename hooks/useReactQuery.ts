import { useQuery } from '@tanstack/react-query';
import { championsAPI } from '../constants/apis';
import { fetchData } from './useFetch';

export const useReactQuery = () => {
  const { data, status } = useQuery(['champions'], () =>
    fetchData(championsAPI)
  );
};
