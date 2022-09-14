import { QueryClient } from '@tanstack/react-query';
import React from 'react';
import { getChampions } from '../../hooks/getChampions';
export const queryClient = new QueryClient();

export const ChampionsQuery = () => {
  const { data } = getChampions();

  console.log(data);
  return (
    <div>
      <code>console.log(champions)</code>
    </div>
  );
};
