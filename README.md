# Éclat Divin

Site vitrine (React + Vite + TypeScript) pour Éclat Divin.

## Stack

- React 18, TypeScript
- Vite 5
- CSS custom (fichier unique `src/styles/global.css`)
- Framer Motion (animations légères)

## Démarrer en local

```bash
# 1) Installer les dépendances
npm install

# 2) Lancer le serveur de dev
npm run dev
# → http://localhost:5173/
```

## Build de production

```bash
npm run build
# Fichiers générés dans le dossier dist/

# (optionnel) Prévisualiser le build
npm run preview
```

## Structure

```
src/
  components/   # Sections du site (Header, Hero, Services, About, Testimonials, Gallery, Footer)
  hooks/        # Hooks utilitaires (ex: smooth scroll Lenis)
  styles/       # Styles globaux (global.css)
  types/        # Déclarations de types
  App.tsx       # Composition des sections
  main.tsx      # Entrée de l’appli
```

## Conventions

- Styling centralisé dans `src/styles/global.css`.
- Classes sémantiques par section (ex: `.hero-*`, `.services-*`, `.about-*`, `.testimonials-*`).
- Responsive mobile/tablette/desktop via media queries.
- Les assets sont dans `assets/`.

## Scripts NPM

- `dev`: démarre Vite en mode développement
- `build`: build de production
- `preview`: prévisualisation du build prod

## Notes responsive

- Header: menu hamburger en mobile (<768px), nav classique sur desktop.
- Hero: visuels en split 50/50 desktop; pile verticalement en mobile, CTA texte au-dessus du bouton.
- Services: grilles 3→2→1, cartes fixes à 360px sur desktop (comme la maquette).
- About: petit portrait superposé en bas de la grande image en mobile.
- Testimonials: grille 3→2→1, fond des cartes `#D5B895`.

## Déploiement

- Build statique prêt à être servi (Netlify, Vercel, GitHub Pages,…).
- Déployer le contenu de `dist/`.

## Licence

Projet privé. Tous droits réservés Éclat Divin.
