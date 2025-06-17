// src/routes/exps/[slug]/+page.server.ts
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getExpBySlug } from '$lib/exps';

export const load: PageServerLoad = async ({ params }) => {
  const exp = getExpBySlug(params.slug);

  if (!exp) throw error(404, 'Esperimento non trovato');

  return { exp };
};
