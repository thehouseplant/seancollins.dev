// Import utility functions
import { defineCollection, z } from 'astro:content';

// Import content loaders
import { glob, file } from 'astro/loaders';

// Define collections
const blog = defineCollection({ /* ... */ });

// Export a single collections object to register collection(s)
export const collections = { blog };
