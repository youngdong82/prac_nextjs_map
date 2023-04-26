import Header from '@component/components/common/Header';
import { NextSeo } from 'next-seo';

export default function Feedback() {
  return (
    <>
      <NextSeo
        title='피드백'
        description='피드백 해주세요'
      />
      <Header />
      <main></main>
    </>
  )
}
