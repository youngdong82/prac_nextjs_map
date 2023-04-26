import type { NextPage, GetServerSideProps } from 'next';

interface Props {
  data: number;
}

const Example: NextPage<Props> = (Props) => {
  return (
    <main>
      <h1>getServerSideProps Pages</h1>
      <p>값: {Props.data}</p>
    </main>
  )
}
export default Example;

export const getServerSideProps: GetServerSideProps = async () => {
  const delayInSeconds = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
  );

  return {
    props: { data }
  };
}