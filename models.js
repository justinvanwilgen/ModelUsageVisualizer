// ----------------------------------------------------------------------
// DATA — parsed from swe_bench_verified_leaderboard_with_token_costs.csv
// Limited to models with a *Current* pricing status only:
//   • SWE-bench Verified results only.
//   • Preview, Deprecated, and Discontinued pricing excluded
//     (Qwen 3.6 Max, Gemini 3.x previews, Claude Opus 4 / 4.1).
//   • CSV does not provide release dates, so the `release` field is omitted.
//
// Loaded as a classic script so it also works when index.html is opened
// directly from disk (file://), where ES-module imports of local files are
// blocked by the browser. It exposes MODELS and PROVIDER_COLORS on `window`.
// ----------------------------------------------------------------------
window.MODELS = [
  { provider: 'Anthropic', model: 'Claude Opus 4.7 (max)', score: 83.5, variant: 'Verified', input: 5.00, cached: 0.50, output: 25.00, status: 'Available' },
  { provider: 'OpenAI', model: 'GPT-5.5 (xhigh)', score: 80.6, variant: 'Verified', input: 5.00, cached: 0.50, output: 30.00, status: 'Available' },
  { provider: 'Google', model: 'Gemini 3.5 Flash (high)', score: 79.3, variant: 'Verified', input: 1.50, cached: 0.15, output: 9.00, status: 'Available' },
  { provider: 'Anthropic', model: 'Claude Opus 4.6 (no thinking)', score: 78.7, variant: 'Verified', input: 5.00, cached: 0.50, output: 25.00, status: 'Available' },
  { provider: 'OpenAI', model: 'GPT-5.4 (high)', score: 76.9, variant: 'Verified', input: 2.50, cached: 0.25, output: 15.00, status: 'Available' },
  { provider: 'Moonshot', model: 'Kimi K2.6', score: 76.7, variant: 'Verified', input: 0.95, cached: 0.16, output: 4.00, status: 'Available' },
  { provider: 'Anthropic', model: 'Claude Opus 4.5 (no thinking)', score: 76.7, variant: 'Verified', input: 5.00, cached: 0.50, output: 25.00, status: 'Available' },
  { provider: 'Anthropic', model: 'Claude Sonnet 4.6', score: 75.2, variant: 'Verified', input: 3.00, cached: 0.30, output: 15.00, status: 'Available' },
  { provider: 'OpenAI', model: 'GPT-5.3 Codex (high)', score: 74.8, variant: 'Verified', input: 1.75, cached: 0.175, output: 14.00, status: 'Available' },
  { provider: 'Z.ai (Zhipu AI)', model: 'GLM-5.1', score: 74.2, variant: 'Verified', input: 1.40, cached: 0.26, output: 4.40, status: 'Available' },
  { provider: 'Moonshot', model: 'Kimi K2.5', score: 73.8, variant: 'Verified', input: 0.60, cached: 0.10, output: 3.00, status: 'Available' },
  { provider: 'OpenAI', model: 'GPT-5.2 (high)', score: 73.8, variant: 'Verified', input: 1.75, cached: 0.175, output: 14.00, status: 'Available' },
  { provider: 'OpenAI', model: 'GPT-5 (high)', score: 73.6, variant: 'Verified', input: 1.25, cached: 0.125, output: 10.00, status: 'Available' },
  { provider: 'Z.ai (Zhipu AI)', model: 'GLM-5', score: 72.1, variant: 'Verified', input: 1.00, cached: 0.20, output: 3.20, status: 'Available' },
  { provider: 'OpenAI', model: 'GPT-5 (medium)', score: 71.5, variant: 'Verified', input: 1.25, cached: 0.125, output: 10.00, status: 'Available' },
  { provider: 'Anthropic', model: 'Claude Sonnet 4.5 (no thinking)', score: 71.3, variant: 'Verified', input: 3.00, cached: 0.30, output: 15.00, status: 'Available' },
  { provider: 'OpenAI', model: 'GPT-5.1 (high)', score: 68.0, variant: 'Verified', input: 1.25, cached: 0.125, output: 10.00, status: 'Available' },
  { provider: 'OpenAI', model: 'GPT-5 mini (medium)', score: 64.7, variant: 'Verified', input: 0.25, cached: 0.025, output: 2.00, status: 'Available' },
];

window.PROVIDER_COLORS = {
  'Anthropic':      '#d97757',
  'OpenAI':         '#10a37f',
  'Google':         '#4285f4',
  'Moonshot':       '#a855f7',
  'Z.ai (Zhipu AI)': '#ec4899',
};

