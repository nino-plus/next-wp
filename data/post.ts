import 'server-only';

import { wpFetch } from '@/lib/wp';
import { Post } from '@/types/post';

export const getPost = async (id: string) => {
  const res = await wpFetch('/posts/' + id);

  return (await res.json()) as Post;
};

export const getPosts = async (page: number = 1) => {
  const res = await wpFetch(`/posts?page=${page}`);
  const totalPageCount = res.headers.get('X-WP-TotalPages');

  return {
    posts: (await res.json()) as Post[],
    totalPageCount: Number(totalPageCount),
  };
};

export const searchPosts = async (keyword: string) => {
  const res = await wpFetch(`/search?search=${keyword}`);
  const totalPageCount = res.headers.get('X-WP-TotalPages');

  return {
    posts: (await res.json()) as Post[],
    totalPageCount: Number(totalPageCount),
  };
};
