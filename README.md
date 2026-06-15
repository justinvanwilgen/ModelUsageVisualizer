# LLM Model Usage Visualizer

An interactive 3D scatter plot that maps large language models by **API price** and **coding capability** — so you can instantly see which models offer the best value for code-generation tasks.

## What it shows

Each point in the 3D space is an LLM, positioned along three axes:

| Axis | Metric |
|------|--------|
| **X →** | Input cost (USD / 1M tokens, log scale) |
| **Y ↑** | Output cost (USD / 1M tokens, log scale) |
| **Z ↗** | Coding capability (SWE-bench score %) |

Points are colored by provider and shaped by benchmark variant:

- **●** SWE-bench Verified
- **◆** SWE-bench Pro

## Controls

| Input | Action |
|-------|--------|
| Drag | Rotate |
| Scroll | Zoom |
| Right-drag | Pan |
| Hover | Show model details |

## Providers covered

- Anthropic (Claude)
- OpenAI (GPT)
- Google (Gemini)
- Moonshot AI (Kimi)
- MiniMax
- xAI (Grok)

## ⚠ Benchmark note

The capability axis mixes **SWE-bench Pro** and **SWE-bench Verified** results, which use different task sets and harnesses. Cross-variant comparisons should be treated with caution — use the shape encoding to tell them apart.

## Usage

No build step required. Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

The visualization loads [Three.js](https://threejs.org/) via CDN (`unpkg.com`), so an internet connection is required on first load.

## Data

Model data is embedded in `index.html` and was sourced from public pricing pages and published SWE-bench leaderboard results as of **2026-06-15**. To update or add models, edit the `MODELS` array near the top of the `<script type="module">` block.
