import Head from 'next/head';
import { pageTitle } from 'modules/utils/constValues';

export const About = (): JSX.Element => (
  <>
    <Head>
      <title>About | {pageTitle}</title>
    </Head>

    <main>
      <h1>About</h1>
    </main>
  </>
);

export default About;
