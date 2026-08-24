import type { MetadataRoute } from 'next';
import { blogPosts } from './data';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://filipinooutsource.com', lastModified: '2026-08-23' },
    { url: 'https://filipinooutsource.com/blog', lastModified: '2026-08-23' },
    ...blogPosts.map((post) => ({ url: `https://filipinooutsource.com/blog/${post.slug}`, lastModified: '2026-08-23' })),
  ];
}
