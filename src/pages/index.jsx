import Layout from '@/components/layouts/layout/layout';
import HomeScreen from '@/components/screens/home-screen/home-screen';
import { PostService } from '@/services/post-service';
import { QuoteService } from '@/services/quote-service';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home(props) {
  return (
    <Layout>
      <HomeScreen {...props} />
    </Layout>
  );
}

export async function getServerSideProps({ locale, query }) {
  const data = await QuoteService.paginate(locale, query.page);
  const posts = await PostService.getAll(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
      posts,
    },
  }
}
