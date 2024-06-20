import Article from '@/components/article';
import { getPost } from '@/data/post';
import { draftMode } from 'next/headers';

export default async function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { isEnabled } = draftMode();

  if (!isEnabled) {
    return <p>不正なアクセス</p>;
  }

  const post = await getPost(id);

  return (
    <div>
      <Article post={post} />
    </div>
  );
}
