import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';

import { Layout } from '~/components';

import '~/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style global jsx>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
