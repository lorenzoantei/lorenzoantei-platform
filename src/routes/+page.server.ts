import type { PageServerLoad } from './$types';
import { getRecentExps } from '$lib/exps';

export const load: PageServerLoad = () => {
  const recentExps = getRecentExps(10);
  return { recentExps };
};