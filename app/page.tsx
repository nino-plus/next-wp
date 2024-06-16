import Link from 'next/link';

export default async function Home() {
  return (
    <main>
      <Link href="/posts">記事一覧</Link>
    </main>
  );
}
