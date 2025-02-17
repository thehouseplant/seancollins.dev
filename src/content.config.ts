// Import utility functions
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define collections
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/blog'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  })
});

// Export a single collections object to register collection(s)
export const collections = { blog };
