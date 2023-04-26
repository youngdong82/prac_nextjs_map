import Link from 'next/link';

export default function Links() {
  return (
    <main>
      <h1>Links</h1>
      <div style={{ height: '200vh' }} />
      <Link href="/section1/getStaticProps">/getStaticProps</Link>
    </main>
  );
}