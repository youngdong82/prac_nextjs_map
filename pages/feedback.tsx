import Header from '@component/components/common/Header';
import { NextSeo } from 'next-seo';

export default function Feedback() {
  return (
    <>
      <NextSeo
        title='피드백'
        description='피드백 해주세요'
        canonical='https://prac-nextjs-map.vercel.app/feedback'
      />
      <Header />
      <main></main>
    </>
  )
}
