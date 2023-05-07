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
      </Head>

      <Header />

      {children}

      <Footer />
    </>
  );
}
