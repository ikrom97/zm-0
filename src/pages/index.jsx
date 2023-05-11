import Layout from '@/components/layouts/layout/layout';
import HomeScreen from '@/components/screens/home-screen/home-screen';
import { getPosts } from '@/services/post-services';
import { paginateQuotes } from '@/services/quote-services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home(props) {
  
  return (
    <Layout>
      <HomeScreen {...props} />
    </Layout>
  );
}

export async function getServerSideProps({ locale, query }) {
  const quotesPagination = await paginateQuotes(locale, query.page);
  const posts = await getPosts(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      quotesPagination,
      posts,
    },
  }
}
