import MapSection from '@component/components/home/MapSection';
import { NextPage } from 'next';
import { Store } from '../types/store';
import useStores from '@component/hooks/useStores';
import { useEffect } from 'react';
import HomeHeader from '@component/components/home/Header';
import DetailSection from '@component/components/home/DetailSection';
import { NextSeo } from 'next-seo';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {

  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <NextSeo
        title='Next.js 시작하기'
        description='Next.js 시작하기 설명'
        canonical='https://prac-nextjs-map.vercel.app'
      />
      <HomeHeader />
      <main style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}>
        <MapSection />
        <DetailSection />
      </main>
    </>
  )
}

export default Home;

export async function getStaticProps() {
  const stores = (await import("../public/stores.json")).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  }
}
