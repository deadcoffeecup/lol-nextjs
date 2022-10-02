import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useTheme } from '../contexts/theme/ThemeContext';

export default function Home() {
  const { themeMode } = useTheme();
  return (
    <div className='container'>
      <Head>
        <title>All Champions</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container'>
        <ul style={{ color: themeMode === 'light' ? '#222' : 'white' }}>
          <li>
            <Link href={'/lazyList'}>Lazy List</Link>
          </li>
          <li>
            <Link href={'/list'}>List with TanStack Query</Link>
          </li>
          <li>
            <Link href={'/ListOfChampions'}>List with casual fetch</Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
        }
        ul {
          list-style: none;
          color: white;
        }
        li {
          color: white;
          padding: 20px;
        }
        a {
          color: white;
        }
        a:focus {
          color: white;
        }
        a:visited {
          color: white;
        }
      `}</style>
    </div>
  );
}
