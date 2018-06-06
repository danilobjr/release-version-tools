import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
    <h1>About</h1>
  </div>
);
