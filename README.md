# ADN Studio MVP

This repository contains a minimal working prototype of the **ADN Studio** SaaS application.  The goal of this prototype is to give you a starting point for building the full ADN Studio platform described in our earlier discussion.  It includes a simple Next.js front‑end and a Node.js API endpoint stub that you can extend to talk to your AI design back end.

## Getting Started

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at <http://localhost:3000>.

## Project Structure

```
adn-studio-mvp/
├── components/      # Reusable UI components (AIInput, TemplateSelector, etc.)
├── pages/           # Next.js pages for each screen
├── services/        # Helper modules for API calls
├── theme.js         # Design constants (colours, spacing, etc.)
├── package.json     # Project metadata and dependencies
├── brands/          # Sources de vérité ADN pour les marques / produits
└── README.md        # This file
```

### Key Directories

- **pages/** – Contains the pages rendered by Next.js.  Each file in this directory becomes a route.  For example, `pages/index.js` is the home screen, `pages/create-project.js` is the project creation form, etc.
- **components/** – Reusable React components used across pages.  You can expand this directory as you build out more complex UIs.
- **services/** – Modules that encapsulate external API calls.  The `aiService.js` file exports a `generateDesign` function that posts a prompt and assets to your own API.  Modify this module to point at your AI infrastructure.
- **theme.js** – Centralised theme definitions such as colours and border radii.  Update these values to customise the look and feel of your app.
- **brands/** – Brand DNA registry. Human and machine-readable rules for products and sub-brands.

## Brand DNA Registry

### SIGNELYA — by JS-Innov.IA®

Source officielle : [`brands/signelya/README.md`](brands/signelya/README.md)

- Bible complète : [`brands/signelya/BRAND_BIBLE.md`](brands/signelya/BRAND_BIBLE.md)
- Manifest IA : [`brands/signelya/brand-manifest.json`](brands/signelya/brand-manifest.json)
- Design tokens : [`brands/signelya/design-tokens.json`](brands/signelya/design-tokens.json)
- Contrat de génération IA : [`brands/signelya/PROMPT_CONTRACT.md`](brands/signelya/PROMPT_CONTRACT.md)
- Assets vectoriels : [`brands/signelya/assets/`](brands/signelya/assets/)

## Notes

- This prototype does **not** include any API keys.  You must set up your own AI back end (for example, using OpenAI or a custom model) and modify `services/aiService.js` accordingly.
- The code is intentionally simple.  It does not include authentication, persistent storage or a full drag‑and‑drop editor.  The intent is to give you a strong base from which to build.
- Feel free to extend the components, add new pages, or restructure the project as your requirements evolve.

## Building and Deploying

To create a production build and run it locally:

```bash
npm run build
npm start
```

Next.js will compile the project into an optimised production build.  You can deploy the resulting application on any Node.js hosting platform that supports Next.js.  Make sure to configure environment variables for your AI back end if required.

## License

This project is provided as a prototype and does not include a specific license.  You are free to use it as a starting point for your own work.
