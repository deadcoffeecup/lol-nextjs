import Head from 'next/head';
import React from 'react';

import { ChampionsPaginated } from '../components/ChampionsPaginated';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>All Champions</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ChampionsPaginated />

      <style jsx global>{`
      .container{
        width:100%;
      }
        html,
        body {
        width:100%;
          display: flex;
          flexWrap: wrap,
          justify-content:center;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
