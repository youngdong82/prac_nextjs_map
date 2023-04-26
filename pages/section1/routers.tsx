import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Routers() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/section1/links');
  }, [router]);

  return (
    <main>
      <h1>Routers</h1>
      <button
        onClick={() => {
          router.push('/section1/links');
        }}>/links</button>
    </main>
  );
}