import Layout from '@/components/layouts/layout/layout';
import TagsScreen from '@/components/screens/tags-screen/tags-screen';
import { getPosts } from '@/services/post-services';
import { getTags } from '@/services/tag-services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Tags(props) {
  return (
    <Layout>
      <TagsScreen {...props} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const posts = await getPosts(locale);
  const tags = await getTags(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      posts,
      tags,
    },
    revalidate: 60,
  }
}
