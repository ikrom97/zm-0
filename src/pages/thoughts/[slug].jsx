import Layout from '@/components/layouts/layout/layout';
import QuotesSelectedScreen from '@/components/screens/quotes-selected-screen/quotes-selected-screen';
import { getQuoteBySlug, getQuotes } from '@/services/quote-services';
import { getTags } from '@/services/tag-services';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ThoughtsSelected(props) {
  return (
    <Layout>
      <QuotesSelectedScreen {...props} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const quotes = await getQuotes();

  return {
    paths: quotes.map((quote) => ({
      params: {
        slug: quote.slug,
      }
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ locale, params }) {
  const selectedQuote = await getQuoteBySlug(params.slug);
  const tags = await getTags(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      selectedQuote,
      tags,
    },
    revalidate: 60,
  };
}
