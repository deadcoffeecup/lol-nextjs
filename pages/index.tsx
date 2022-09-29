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
      <Link href={'/lazyList'}>Lazy List</Link>
      <style jsx>{`
        .container {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
