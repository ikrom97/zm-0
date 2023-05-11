import Layout from '@/components/layouts/layout/layout';
import TagsSelectedScreen from '@/components/screens/tags-selected-screen/tags-selected-screen';
import { getTagBySlug, getTags } from '@/services/tag-services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function TagsSelected(props) {
  return (
    <Layout>
      <TagsSelectedScreen {...props} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const tags = await getTags();

  return {
    paths: tags.map((tag) => ({
      params: {
        slug: tag.slug,
      }
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ locale, params }) {
  const selectedTag = await getTagBySlug(params.slug);
  const tags = await getTags(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      selectedTag,
      tags,
    },
    revalidate: 60,
  }
}
