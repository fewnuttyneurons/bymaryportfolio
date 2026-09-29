import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.object({ en: z.string(), fa: z.string() });

/**
 * How a piece sits in its band (desktop). Everything stacks on small screens.
 * - side-start / side-end: image and caption side by side, image first / caption first
 * - card-start / card-end: large image with an overlapping caption card
 * - pair: two pieces side by side, caption under each image
 */
const layout = z.enum(['side-start', 'side-end', 'card-start', 'card-end', 'pair']);

const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: ({ image }) => {
    const piece = z.object({
      image: image(),
      alt: text,
      title: text,
      caption: text,
    });
    return z.object({
      name: z.string(),
      order: z.number(),
      intro: text,
      bands: z.array(
        z.object({
          tone: z.enum(['butter', 'rust']),
          rows: z.array(
            z.object({
              layout,
              /** Desktop image width in px on the 1440 board (content area is 1248). */
              size: z.number().optional(),
              /** Desktop caption drop from the row top, in px on the 1440 board. */
              offset: z.number().optional(),
              pieces: z.array(piece).min(1).max(2),
            }),
          ),
        }),
      ),
    });
  },
});

export const collections = { projects };
