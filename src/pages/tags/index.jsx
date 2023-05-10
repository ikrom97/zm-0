import Layout from '@/components/layouts/layout/layout';
import TagsScreen from '@/components/screens/tags-screen/tags-screen';
import { PostService } from '@/services/post-service';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Tags(props) {
  return (
    <Layout>
      <TagsScreen {...props} />
    </Layout>
  );
}

export async function getServerSideProps({ locale }) {
  const posts = await PostService.getAll(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      posts,
    },
  }
}
