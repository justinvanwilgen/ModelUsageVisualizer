# LLM Model Usage Visualizer

An interactive 3D scatter plot that maps large language models by **API price** and **coding capability** — so you can instantly see which models offer the best value for code-generation tasks.

## What it shows

Each point in the 3D space is an LLM, positioned along three axes:

| Axis | Metric |
|------|--------|
| **X →** | Input cost (USD / 1M tokens, log scale) |
| **Y ↗** | Output cost (USD / 1M tokens, log scale) |
| **Z ↑** | Coding capability (SWE-bench score %) |

Points are colored by provider. All models use **● SWE-bench Verified** results.

An optional **Optimal value slope** overlay projects the current best cost/score frontier into the 3D scene. It uses a coding-weighted price budget:

```text
effective budget = input_cost^0.35 * output_cost^0.65
```

The output-heavy weighting reflects coding workloads, where generated tokens usually dominate total API spend. Models are sorted by that effective budget, and the overlay projects a translucent ribbon through the models that set new SWE-bench score records at higher budget levels.

## Controls

| Input | Action |
|-------|--------|
| Drag | Rotate |
| Scroll | Zoom |
| Right-drag | Pan |
| Hover | Show model details |
| Click legend row | Toggle provider visibility |
| Click overlay row | Toggle optimal value slope |

## Providers covered

- Anthropic (Claude)
- OpenAI (GPT)
- Google (Gemini)
- Moonshot AI (Kimi)
- Z.ai / Zhipu AI (GLM)

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | App shell, styles, and Three.js scene logic |
| `models.js` | Model data (`MODELS` array) and provider color map |
| `logos.js` | Provider logo registry (Simple Icons slugs / fallback initials) |

## Usage

No build step required. Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

The visualization loads [Three.js](https://threejs.org/) via CDN (`unpkg.com`), so an internet connection is required on first load. Both `models.js` and `logos.js` are loaded as classic scripts so the page also works when opened directly from disk (`file://`).

## Data

Model data lives in `models.js` and was sourced from public pricing pages and published SWE-bench leaderboard results as of **2026-06-15**. To update or add models, edit the `MODELS` array in `models.js`. To add a provider logo, add an entry to `window.PROVIDER_LOGOS` in `logos.js` (supports a Simple Icons slug, a direct SVG URL, or inline SVG markup).
