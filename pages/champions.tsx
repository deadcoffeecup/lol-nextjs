import React from 'react';
import { getChampions } from '../hooks/getChampions';

export default function champions() {
  const { data } = getChampions();
  console.log(data);
  return (
    <div>
      <code>console.log(champions)</code>
    </div>
  );
}
