import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { championAvatarAPI } from '../../constants/apis';
import { getChampions } from '../../hooks/getChampions';
import { ChampionType } from '../../types/champion-data.types';
import { ChampionsPaginated } from './ChampionsPaginated';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { type } = params;

  return {
    props: {
      type,
    },
  };
};
export default ChampionsPaginated;
