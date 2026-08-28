import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// docs content lives under content/docs/docs so routes land on /docs/* ⋆˙⟡
export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
