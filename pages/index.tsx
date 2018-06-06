import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/pages/index.scss';

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
    <h1 className="text-red">Home</h1>
  </div>
);
