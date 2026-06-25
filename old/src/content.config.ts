import { defineCollection, z } from 'astro:content';

const personas = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    summary: z.string(),
    services: z.array(z.string()),
    publishDate: z.date()
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    summary: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string())
  })
});

export const collections = {
  personas,
  'case-studies': caseStudies,
  blog
};
