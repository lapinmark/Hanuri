# Hanuri Workspace

Hanuri is a Vue 3 and Quasar Framework application using Quasar CLI with Vite, TypeScript, Vue Router, and Pinia.

## Project Conventions

- Keep route definitions in `src/router/routes.ts` and router setup in `src/router/index.ts`.
- Put application shells in `src/layouts`, routed views in `src/pages`, and Pinia setup in `src/stores`.
- Keep Quasar CLI configuration in `quasar.config.ts`.
- Use the npm scripts in `package.json` for development, production builds, and type checks.

## Setup Status

- [x] Requirements clarified: Vue 3, Quasar, Vite, TypeScript, Router, and Pinia.
- [x] Project structure and starter route/layout created in the workspace root.
- [x] README and Copilot instructions created and current.
- [x] No additional VS Code extensions or task configuration required.
- [ ] Install dependencies and compile: blocked because Node.js and npm are unavailable in the current environment.
- [ ] Launch the development server: not started; launch requires user confirmation.

## Commands

- `npm install` installs dependencies and prepares Quasar generated files.
- `npm run dev` starts the development server.
- `npm run build` creates a production build.
- `npm run typecheck` checks TypeScript and Vue types.
