import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * PROJECTS — one .md file per project.
 * To add a project: create `src/content/projects/your-project.md`.
 * The zod schema validates every entry at build time, so broken data
 * fails loudly instead of rendering silently.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    github: z.string().optional(), // empty/absent → no GitHub button rendered
    image: z.string().optional(),  // e.g. "/projects/my-board.jpg" (file in public/)
    status: z.enum(['placeholder', 'in-progress', 'completed']).default('placeholder'),
    order: z.number().default(999),
  }),
});

export const collections = { projects };
