/* ---------------------------------------------------------------------------
 * Provider logo registry
 * ---------------------------------------------------------------------------
 * Maps each model provider to its company logo. The visualizer looks up logos
 * by the model's `provider` field, so any new data point added to MODELS is
 * mapped to a logo automatically — just make sure its provider has an entry
 * here (otherwise it falls back to the provider's initial on a colored disc).
 *
 * Each entry supports (resolved in order of preference: svg → url → slug):
 *   slug  – Simple Icons slug (https://simpleicons.org). The white brand logo is
 *           fetched from the Simple Icons CDN at runtime.
 *   url   – (optional) full URL to an SVG logo. Use for brands not on the Simple
 *           Icons CDN (e.g. served via Iconify). Should resolve to a white mark.
 *   svg   – (optional) inline SVG markup. If present, it is used directly —
 *           handy for brands with no CDN logo or for fully offline use.
 *   label – short fallback text drawn on the ball if no logo can be loaded.
 *
 * Loaded as a classic script so it also works when index.html is opened
 * directly from disk (file://), where ES-module imports of local files are
 * blocked by the browser. It exposes the registry on `window`.
 * ------------------------------------------------------------------------- */
window.PROVIDER_LOGOS = {
  'Anthropic':       { slug: 'claude',       label: 'A' },
  // OpenAI was removed from the Simple Icons CDN; fetch a white mark via Iconify.
  'OpenAI':          { url: 'https://api.iconify.design/simple-icons/openai.svg?color=%23ffffff', label: 'O' },
  'Google':          { slug: 'googlegemini', label: 'G' },
  'Moonshot':        { slug: 'moonshotai',  label: 'K' },
  // No public brand logo available — shows the 'Z' initial fallback.
  'Z.ai (Zhipu AI)': { slug: null,           label: 'Z' },
};

// Used when a provider has no entry above.
window.PROVIDER_LOGOS_DEFAULT = { slug: null, label: '?' };
