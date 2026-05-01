# Fonts

- **Clash Grotesk** — primary display face (titles, headings, subheads). **Self-hosted** from files in this folder. Static weights 200 / 300 / 400 / 500 / 600 / 700 plus the variable axis, in WOFF2, WOFF, and TTF.
- **Switzer** — supporting text face (body, citations). Currently loaded from **Fontshare** CDN (free for commercial use). Drop the WOFF2/WOFF files here and update `colors_and_type.css` to self-host it too.

## Files in this folder
- `ClashGrotesk-Extralight.{woff2,woff,ttf}` — 200
- `ClashGrotesk-Light.{woff2,woff,ttf}` — 300
- `ClashGrotesk-Regular.{woff2,woff,ttf}` — 400
- `ClashGrotesk-Medium.{woff2,woff,ttf}` — 500 (default display weight)
- `ClashGrotesk-Semibold.{woff2,woff,ttf}` — 600
- `ClashGrotesk-Bold.{woff2,woff,ttf}` — 700
- `ClashGrotesk-Variable.{woff2,woff,ttf}` — 200 → 700 variable

## Fallback stack
```
--font-display: 'Clash Grotesk', 'Inter', system-ui, sans-serif;
--font-text:    'Switzer',      'Inter', system-ui, sans-serif;
```

## Fallback stack

```
--font-display: 'Clash Grotesk', 'Inter', system-ui, sans-serif;
--font-text:    'Switzer',      'Inter', system-ui, sans-serif;
```

Inter is a decent last-resort fallback — both faces are neo-grotesques, but proportions differ. Flag any substitution when previewing.
