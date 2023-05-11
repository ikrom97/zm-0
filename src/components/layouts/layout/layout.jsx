import Head from 'next/head';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useTranslation } from 'next-i18next';

export default function Layout({ children }) {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicons/180x180.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>

      <Header />

      {children}

      <Footer />
    </>
  );
}
