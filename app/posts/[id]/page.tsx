import { getPost } from '@/app/posts/[id]/data';
import { format } from 'date-fns';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPost(id);

  return (
    <article className="prose prose-zinc dark:prose-invert dark:prose-pre:border">
      <div className="not-prose">
        <h1 className="font-bold text-4xl mb-4">{post.title.rendered}</h1>
        <p className="text-muted-foreground">
          {format(new Date(post.date), 'yyyy年MM月dd日')}
        </p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
}
