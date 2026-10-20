import { defineCollection, z } from 'astro:content';

const vehicules = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    modele: z.string(),
    annee: z.number().optional(),
    motorisation: z.string().optional(),
    couleur: z.string().optional(),
    proprietaire: z.string().optional(),
    ville: z.string().optional(),
    photo: z.string().optional(),
    galerie: z.array(z.string()).optional(),
    publie: z.boolean().default(true),
  }),
});

const documents = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    categorie: z.string(),
    description: z.string().optional(),
    fichier: z.string().optional(),
    lien: z.string().optional(),
    publie: z.boolean().default(true),
  }),
});

const sorties = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    date_fin: z.coerce.date().optional(),
    lieu: z.string(),
    type: z.string().default('Sortie'),
    image: z.string().optional(),
    inscription_url: z.string().optional(),
    publie: z.boolean().default(true),
  }),
});

const bureau = defineCollection({
  type: 'content',
  schema: z.object({
    nom: z.string(),
    role: z.string(),
    ordre: z.number().default(10),
    photo: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    afficher_menu: z.boolean().default(false),
    ordre_menu: z.number().default(50),
    publie: z.boolean().default(true),
  }),
});

const association = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { vehicules, documents, sorties, bureau, pages, association };
