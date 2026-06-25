import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const personas = defineCollection({
  loader: glob({ base: './src/content/personas', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    team: z.string(),
    image: z.string(),
    summary: z.string(),
    certifications: z.array(z.string()).optional(),
    specialties: z.array(z.string()).optional()
  })
});

const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    summary: z.string(),
    services: z.array(z.string()),
    publishDate: z.coerce.date()
  })
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    summary: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string())
  })
});

export const collections = {
  personas,
  'case-studies': caseStudies,
  blog
};
