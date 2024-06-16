import 'server-only';

import { POSTS_ENDPOINT_URL } from '@/lib/wp';
import { Post } from '@/types/post';

export const getPosts = async () => {
  const res = await fetch(POSTS_ENDPOINT_URL, {
    cache: 'no-store',
  });
  return (await res.json()) as Post[];
};
