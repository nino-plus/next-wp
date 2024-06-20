import Article from '@/components/article';
import { getPost } from '@/data/post';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPost(id);

  return <Article post={post} />;
}
