import { GetServerSideProps } from 'next';

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
