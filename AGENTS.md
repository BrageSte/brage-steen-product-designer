# Agent instructions

## Image previews
- Always inspect preview images first (faster, smaller, easier for Claude/Codex).
- Previews live alongside originals in a `previews/` folder and use the same filenames.
- Always use the original images in the actual site/project output.
- When adding or replacing images anywhere in `public/`, generate previews with max 2000 px on the longest side.
- After running `npm run hooks:install`, previews are generated automatically on commit.
 - Preview generation uses macOS `sips`.

## Commands
Generate previews once: `npm run previews:build`
Watch for changes while working: `npm run previews:watch`
Install git hook for auto previews on commit: `npm run hooks:install`
