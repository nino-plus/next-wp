import { getPosts } from '@/app/posts/data';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="font-bold text-xl mb-6">記事一覧</h1>

      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="relative">
            <CardHeader>
              <CardTitle>
                <Link href={`/posts/${post.id}`}>
                  {post.title.rendered}
                  <span className="absolute inset-0"></span>
                </Link>
              </CardTitle>
              <p className="text-muted-foreground">
                {format(new Date(post.date), 'yyyy年MM月dd日')}
              </p>
            </CardHeader>
            <CardContent>
              <p
                className={cn(
                  post.jetpack_featured_media_url
                    ? 'line-clamp-3'
                    : 'line-clamp-6'
                )}
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />

              {post.jetpack_featured_media_url && (
                <Image
                  src={post.jetpack_featured_media_url}
                  alt=""
                  width={800}
                  height={400}
                  className="aspect-video object-cover object-center rounded-md mt-6 bg-muted"
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
