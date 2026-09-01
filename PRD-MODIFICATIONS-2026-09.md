# PRD — Ajustements du site A6

## Objectif

Mettre à jour les contenus, clarifier la navigation mobile, renforcer la page Services et fiabiliser l’expérience mobile sans dégrader les performances ni le référencement.

## Périmètre livré

- Textes demandés sur l’accueil, le blog, les clients et le formulaire.
- Suppression des boutons dans les héros de Blog, Réalisations, Clients et Contact.
- Ajout du point d’interrogation à « Qui sommes-nous ? » dans le héros et le carrousel.
- Bandeau animé des expertises au-dessus du formulaire de contact.
- Page Services plus dynamique, avec titres et accents bleus.
- Menu mobile hiérarchisé, avec sous-menu Services repliable et catégories explicites.
- Vidéo d’accueil résiliente : URL CDN configurable, poster prioritaire et repli automatique sur les images.
- Logo de marque déclaré explicitement pour les moteurs de recherche et les aperçus sociaux.

## Critères d’acceptation

- Toutes les pages restent navigables au clavier et sur écran étroit.
- Le menu mobile distingue clairement rubriques et services.
- Si la vidéo ne démarre pas, le visiteur voit immédiatement une image de remplacement.
- Le build Next.js et les contrôles TypeScript passent sans erreur.

## Déploiement vidéo

La variable publique `NEXT_PUBLIC_HERO_VIDEO_URL` accepte l’URL finale Cloudflare R2/Stream ou AWS CloudFront. En son absence, le MP4 local reste utilisé. Le CDN doit envoyer `Content-Type: video/mp4`, autoriser les requêtes `Range` et appliquer un cache long.

## Images

Les images déjà livrées en WebP restent en WebP afin d’éviter une régénération destructive. L’upscale ne doit cibler que les sources réellement trop petites pour leur taille d’affichage; agrandir toutes les images augmenterait le poids sans recréer de détail réel.
