import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/pages/about.scss';

export default () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Link href="/">
      <a>Home</a>
    </Link>
    {' '}
    <Link href="/about">
      <a>About</a>
    </Link>
    <h1 className="text-green">About</h1>
  </div>
);
