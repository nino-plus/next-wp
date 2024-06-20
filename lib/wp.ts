const API_BASE_URL =
  'https://primary-production-7503.up.railway.app/wp-json/wp/v2';

export const POSTS_ENDPOINT_URL = `${API_BASE_URL}/posts`;
export const SEARCH_ENDPOINT_URL = `${API_BASE_URL}/search`;

export const wpFetch = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(API_BASE_URL + url, {
    next: {
      revalidate: 60,
    },
    headers: {
      Authorization: `Basic ${Buffer.from(
        `nino:${process.env.WP_PASSWORD}`
      ).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    ...options,
  });

  return res;
};
