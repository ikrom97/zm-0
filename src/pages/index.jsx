import Layout from "@/components/layouts/layout/layout";
import HomeScreen from "@/components/screens/home-screen/home-screen";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <Layout>
      <HomeScreen />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
