import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PostMeta {
  title: string;
  date: string;
  slug: string;
}

export interface Post {
  meta: PostMeta;
  content: string;
}

const expsDir = 'src/lib/exps';

export function getAllExps() {
    const files = fs.readdirSync(path.resolve('src/lib/exps'));
    const exps = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const slug = file.replace(/\.md$/, '');
        const exp = getExpBySlug(slug);
        return exp;
      })
      .filter(exp => exp !== null);
    return exps;
  }

export function getExpBySlug(slug: string): Post {
  const filePath = path.join(expsDir, `${slug}.md`);
  const file = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(file);
  return {
    meta: {
      title: data.title,
      date: data.date,
      slug
    },
    content
  };
}

export function getRecentExps(limit = 10) {
    return getAllExps().slice(0, limit);
  }
