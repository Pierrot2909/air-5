import { defineCollection, z } from 'astro:content';

// URL externe : uniquement http(s) (refuse javascript:, data:, etc.).
// Une chaîne vide est tolérée (champ laissé vide dans le CMS).
const urlHttp = z
  .string()
  .url()
  .refine((u) => /^https?:\/\//i.test(u), 'URL http(s) requise');
const urlHttpOpt = urlHttp.or(z.literal('')).optional();

// Chemin d'un média envoyé via le CMS (ex. /images/uploads/photo.jpg ou /documents/x.pdf)
// ou URL http(s). Interdit les guillemets, parenthèses et espaces dangereux.
const media = z
  .string()
  .refine(
    (s) => /^\/[\w\-./%éèàùçÉ]+$/.test(s) || /^https?:\/\/[^\s'"()<>]+$/i.test(s),
    'Chemin /... ou URL http(s) sans caractères spéciaux requis'
  );
const mediaOpt = media.or(z.literal('')).optional();

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
    photo: mediaOpt,
    galerie: z.array(media).optional(),
    publie: z.boolean().default(true),
  }),
});

const documents = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    categorie: z.string(),
    description: z.string().optional(),
    fichier: mediaOpt,
    lien: urlHttpOpt,
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
    image: mediaOpt,
    inscription_url: urlHttpOpt,
    publie: z.boolean().default(true),
  }),
});

const bureau = defineCollection({
  type: 'content',
  schema: z.object({
    nom: z.string(),
    role: z.string(),
    ordre: z.number().default(10),
    photo: mediaOpt,
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
    image: mediaOpt,
  }),
});

const annonces = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    date_expiration: z.coerce.date().optional(),
    categorie: z.string().default('Divers'),
    prix: z.string().optional(),
    ville: z.string().optional(),
    contact: z.string(),
    photo: mediaOpt,
    galerie: z.array(media).optional(),
    publie: z.boolean().default(true),
  }),
});

const breves = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    icone: mediaOpt,
    publie: z.boolean().default(true),
  }),
});

export const collections = { vehicules, documents, sorties, bureau, pages, association, annonces, breves };
