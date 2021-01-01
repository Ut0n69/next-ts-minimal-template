import Head from 'next/head';
import Link from 'next/link';
import { theme } from 'modules/styles/theme';
import { pageTitle } from 'modules/utils/constValues';

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>{pageTitle}</title>
    </Head>

    <main>
      <h1 className="title">Hi, there.</h1>
      <Link href="/about">About</Link>
    </main>

    <style jsx>{`
      .title {
        font-size: ${theme.size.level4};
      }
    `}</style>
  </div>
);

export default Home;
