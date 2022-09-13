import React from 'react';
import { useReactQuery } from '../hooks/useReactQuery';

export default function champions() {
  const { data } = useReactQuery();
  console.log(data);
  return (
    <div>
      <code>console.log(champions)</code>
    </div>
  );
}
