# Qualité des images

Les images passent par `SiteImage`, qui utilise les originaux disponibles dans `lib/hq-photos.json` et conserve le redimensionnement adaptatif de Next.js avec une qualité de 90. Les sources Pexels récupérées sont documentées dans `lib/photo-sources.json`.

Les photographies qui ne disposent pas d'un original assez large pour un bandeau occupent un cadre à côté du titre. Le cadre conserve la composition et limite la taille affichée pour les écrans à densité 2×. Les photos ne sont pas agrandies artificiellement pour créer du détail inexistant. Les bandeaux disposant d'un original d'au moins 3000 px conservent leur présentation en arrière-plan.

Le carrousel calcule la largeur à télécharger en tenant compte de la hauteur et du recadrage `cover`. Son voile de texte utilise un dégradé sans flou. Le mosaïque Contact et les photographies de projets conservent désormais la composition complète. Les petites images des articles utilisent `contain` au lieu d'un recadrage agrandi.

## Ajouter un meilleur original

1. Ajouter l'original dans `public/photos/hq/` avec un nom distinct.
2. Ajouter sa correspondance dans `lib/hq-photos.json` et sa provenance dans `lib/photo-sources.json` lorsque disponible.
3. Exécuter `node scripts/update-photo-metadata.mjs` pour actualiser les dimensions utilisées par les composants.
4. Vérifier la page sur mobile et sur un écran de bureau à densité 2×.

Le script `prepare-hq-photos.mjs` conserve les correspondances existantes. Après son utilisation, actualiser également les métadonnées avec la commande ci-dessus.

## Vérification

La vérification des images couvre 23 routes à 390 et 1440 px de large, à densité 2×, avec comparaison des dimensions téléchargées et du rendu réel. Elle inclut les huit services, les quatre segments clients, les principales pages, le carrousel et quatre articles dont les images étaient trop petites. Les originaux peuvent conserver du grain, du flou optique ou des limites de prise de vue ; une bonne résolution de téléchargement ne garantit pas à elle seule le détail photographique.
