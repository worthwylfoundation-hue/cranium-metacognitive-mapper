# Convertible Cranium Metacognitive Mapper deployment

This repository deploys the **Convertible Cranium Metacognitive Mapper** as a browser application through the `Deploy Convertible Cranium Metacognitive Mapper` GitHub Actions workflow.

The **Metacognitive Mapper** is a component within the Convertible Cranium ecosystem. After deployment, open it directly with the hash route:

```text
https://worthwyl2022-cloud.github.io/cranium-operator-os/#metacognition
```

The default application entry point (repository slug may still reflect historical naming) is:

```text
https://worthwyl2022-cloud.github.io/cranium-operator-os/
```

The deployment is client-side and local-first for the tracker. Entries are stored in the browser’s local storage and are not transmitted to a server by this deployment. The application includes an acquisition demo, metacognitive tracker, creator studio, resonance lab, and diligence room.

## Deployment requirements

The repository must have GitHub Pages enabled with the GitHub Actions source. The workflow requires `pages: write` and `id-token: write` permissions. The build runs locked dependency installation, TypeScript checking, and the Vite/Express production build before deployment.

## Scope boundary

This deployment is a demonstration and operator surface. It is not the private canonical authority plane and does not independently grant authority, provide security certification, or replace the controlled acquisition diligence package.
