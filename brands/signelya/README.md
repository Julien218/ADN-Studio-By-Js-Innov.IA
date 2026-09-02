# SIGNELYA — Source officielle de l'ADN de marque

Version ADN : **1.2.0**  
Statut : **Master / source de vérité**  
Date de mise à jour : **2026-09-02**  
Marque mère : **JS-Innov.IA®**

> **Promesse officielle :** « Vos écrans prennent vie. »

Ce dossier est la référence à consulter avant toute création liée à SIGNELYA : site web, application, interface, publicité, écran LED, vidéo, motion design, visuel social, présentation commerciale ou génération par IA.

## Ordre de priorité

1. `OFFICIAL_VISUAL_REFERENCES.md` — **références visuelles approuvées / PIXEL-PRESERVE** : aucune transformation interne autorisée.
2. `BRAND_BIBLE.md` — règles humaines complètes.
3. `brand-manifest.json` — règles machine-readable pour agents IA et automatisations.
4. `design-tokens.json` — couleurs, gradients, typo, espacements et motion.
5. `PROMPT_CONTRACT.md` — contrat de génération pour visuels et vidéos IA.
6. `assets/mobile/signelya-symbol-approved-512.png` — symbole SIGNELYA validé, fond extérieur transparent, référence pour icône, favicon et déclinaisons.
7. `assets/mobile/android-chrome-512.png` — version application/PWA validée sur fond sombre.
8. `assets/mobile/apple-touch-icon-180.png`, `android-chrome-192.png`, `favicon-32.png`, `favicon-16.png` — exports techniques officiels pour téléphones et navigateurs.
9. `assets/JSINNOVIA_REFERENCE.md` — référence impérative vers les assets officiels JS-Innov.IA®.

## Règle absolue — références visuelles SIGNELYA

Les visuels approuvés décrits dans `OFFICIAL_VISUAL_REFERENCES.md` sont des **masters immuables**. Lorsqu'une création doit reproduire l'un de ces visuels, il faut utiliser le fichier source validé et non demander à une IA de le recréer.

Doivent rester strictement identiques :

- la géométrie du **S-ruban** ;
- les nuances et transitions cyan, bleu, violet et magenta ;
- le volume, les reflets et les lumières du S ;
- le cadre d'écran derrière le S ;
- les pixels numériques à gauche ;
- le petit effet lumineux cyan à la pointe basse / queue du S ;
- les proportions, positions et détails graphiques ;
- la construction graphique de **SIGNELYA** ;
- la mention **by JS-Innov.IA** lorsqu'elle est présente ;
- le slogan exact **« Vos écrans prennent vie. »**.

Un changement de format (16:9, 9:16, carré, application, favicon, écran mobile, etc.) doit préserver l'asset interne. On adapte le canevas et la composition autour du master ; on ne redessine pas le master.

Les anciens prototypes `assets/signelya-symbol-master.svg` et `assets/signelya-lockup-horizontal.svg` ont été **retirés** et ne doivent plus être utilisés comme référence.

## Règle absolue de co-branding

SIGNELYA est un produit de JS-Innov.IA®. La mention ou le logo JS-Innov.IA® ne doit **jamais être redessiné, réinterprété ni généré approximativement**. Utiliser uniquement les fichiers officiels du dépôt d'assets JS-Innov.IA® indiqués dans `assets/JSINNOVIA_REFERENCE.md`.

## Architecture de marque

```text
JS-Innov.IA®
└── SIGNELYA
    ├── App / plateforme
    ├── Communication commerciale
    ├── Visuels & vidéos
    └── Écrans numériques / LED
```

## Signature officielle

**SIGNELYA**  
**by JS-Innov.IA®**  
**Vos écrans prennent vie.**

Le slogan doit toujours conserver cette orthographe et cette ponctuation.
