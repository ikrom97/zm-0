import Layout from '@/components/layouts/layout/layout';
import AuthorScreen from '@/components/screens/author-screen/author-screen';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Author() {
  return (
    <Layout>
      <AuthorScreen />
    </Layout>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
