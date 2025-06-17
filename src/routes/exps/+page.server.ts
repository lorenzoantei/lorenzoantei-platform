import { getAllExps } from '$lib/exps';

export async function load() {
  const exps = getAllExps();
  return { exps };
}
