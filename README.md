# Polar Valentines 🐻‍❄️💌

A tiny GitHub Pages site for my girlfriend who loves polar bears—built for Valentine’s Day 2026 with Vite + React. It’s a single‑page love letter featuring snowy vibes, pastel hearts, and a couple of polar friends.

## Live page
- https://riso1410.github.io/polar-valentines/
- Deployed from `main` via GitHub Pages.

## Run locally
```bash
npm install
npm run dev
```
Visit the shown localhost URL (usually `http://localhost:5173`).

## Build & deploy
```bash
npm run build
```
The static files live in `dist/`. Publish that folder to GitHub Pages; a simple choice is `npm run build && npm run preview` to verify, then push `dist` via your preferred Pages workflow.

## Automation
- GitHub Actions workflow at `.github/workflows/deploy.yml` builds on every push to `main` and deploys to Pages automatically (plus a manual “Run workflow” trigger).

## Project notes
- Tech: React + Vite, vanilla CSS.
- Theme: snowy palette, heart accents, polar bear illustrations.
- Purpose: sweet, personal Valentine’s surprise—keep it light, cute, and fast.
