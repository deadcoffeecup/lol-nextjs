import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { championsAPI } from '../constants/apis';

export const List = () => {
  const { fetchedObj } = useFetch(championsAPI);
  console.log(fetchedObj);
  return <div>List</div>;
};
