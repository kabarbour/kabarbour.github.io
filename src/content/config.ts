import { z, defineCollection } from "astro:content";

// Blog collection
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
      message: 'tags must be unique',
    }).optional(),
  }),
});

// Store collection
const store = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

// Projects collection
const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).optional(),
    course: z.string().optional(),
  }),
});

// Types (optional but nice to keep)
export type BlogSchema = z.infer<typeof blog.schema>;
export type StoreSchema = z.infer<typeof store.schema>;
export type ProjectSchema = z.infer<typeof projects.schema>;

// Final export
export const collections = {
  blog,
  store,
  projects,
};
