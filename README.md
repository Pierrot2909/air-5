# Site du club Air-5 (Renault 5 et Supercinq)

Site statique (Astro) + backoffice sans code (Decap CMS) accessible sur `/admin`.

## Fonctionnalités

| Besoin | Où c'est géré |
|---|---|
| Fiches véhicules des adhérents | Backoffice > *Fiches véhicules* → pages `/vehicules` (filtre par modèle) |
| Documentation technique (PDF, articles) | Backoffice > *Documentation technique* → `/documentation` |
| Rencontres et sorties | Backoffice > *Rencontres et sorties* → `/sorties` (à venir / passées classées automatiquement) |
| Adhésion et cotisation | Backoffice > *Réglages* : lien de paiement + montant → `/adhesion` |
| Présentation et bureau | Backoffice > *Réglages* (texte) + *Membres du bureau* → `/association` |
| Nouvelles pages libres | Backoffice > *Pages libres* (option « afficher dans le menu ») |

## Tester en local

```bash
npm install
npm run dev            # site sur http://localhost:4321
npx decap-server       # (autre terminal) backoffice sur http://localhost:4321/admin
```

## Mise en ligne (gratuit) — Netlify + GitHub

1. Créer un dépôt GitHub et y pousser ce dossier.
2. Sur netlify.com : *Add new site > Import from Git* → choisir le dépôt (build : `npm run build`, dossier : `dist`, déjà dans `netlify.toml`).
3. Authentification du backoffice : Netlify > *Site configuration > Access & security > OAuth* → *Install provider* → GitHub (renseigner un Client ID / Secret créés dans GitHub > Settings > Developer settings > OAuth Apps, callback `https://api.netlify.com/auth/done`).
4. Dans `public/admin/config.yml`, remplacer `VOTRE-COMPTE/VOTRE-DEPOT` par le dépôt réel et, si le site n'est pas sur un domaine netlify, ajouter `site_domain: votre-domaine`.
5. Donner l'accès en écriture au dépôt aux membres du bureau (GitHub > Settings > Collaborators). Ils se connectent sur `https://votre-site/admin` avec leur compte GitHub.

Chaque enregistrement dans le backoffice déclenche automatiquement une nouvelle publication (1 à 2 min).

Alternatives d'hébergement : Cloudflare Pages ou GitHub Pages (le backoffice nécessitera alors un proxy OAuth ; voir la documentation Decap CMS).

## À personnaliser

- `src/data/site.json` (ou Backoffice > Réglages) : nom, contacts, lien HelloAsso, cotisation.
- `astro.config.mjs` : URL définitive (`site`).
- `src/styles/global.css` : couleurs (variables en tête de fichier).
- Remplacer les contenus d'exemple (fiches, documents, sorties, bureau).

## Remarques

- Évitez de créer une page libre dont le titre produit un lien déjà utilisé (`adhesion`, `association`, `vehicules`, `documentation`, `sorties`).
- Les rendez-vous passés sont rangés côté navigateur : pas besoin de republier à chaque date.
- Données personnelles : ne publier que les informations (noms, villes) que les adhérents ont acceptées.
