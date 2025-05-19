import { posts } from '$lib/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) throw new Error('Post not found');
  return { post };
};
