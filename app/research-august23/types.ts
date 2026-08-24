import type { ResearchPost } from '../fleet-data';

export type August23Article = Omit<ResearchPost, 'related' | 'heroImage'> & {
  heroImage: string;
};
