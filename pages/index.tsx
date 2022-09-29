import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>All Champions</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container'>
        <Link href={'/lazyList'}>Lazy List</Link>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </div>
  );
}
