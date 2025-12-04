# Alpine.js Sample Project

## Project Structure

This repository contains two different implementation approaches.

### simple-dev

A simple version implemented with HTML/CSS.

**Description:**

- Loads Alpine.js["https://alpinejs.dev/"] via CDN

### tailwind-typescript-dev

An implementation version using Tailwind CSS and TypeScript.

**Description:**

- Vite + TypeScript + Tailwind CSS v4

**Required Setup:**

- When using Alpine.js with TypeScript, the type definition file `src/alpine.d.ts` is required
- This file enables proper type checking for `window.Alpine` access in TypeScript environment

**Usage:**

```bash
cd tailwind-typescript-dev

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build
pnpm build
```

## About Alpine.js

Key features:

- `x-data`: Define component data
- `x-bind` (`:class`): Dynamically bind classes
- `x-on` (`@click`): Add event handlers
