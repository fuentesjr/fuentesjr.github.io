# Salvador Fuentes Jr. —  A résumé, rendered as a dashboard
https://fuentesjr.dev

Built as a static site — no framework, no build step, no server. Just HTML, React-via-Babel, and CSS. Two layout variants (dashboard + editorial), command palette, keyboard nav, light/dark, three density modes.

## Local development
Open `index.html` in a browser.

## Deployment
Pushes to `main` auto-deploy via GitHub Pages.

## Files
| path                  | purpose                                    |
|-----------------------|--------------------------------------------|
| `index.html`          | entry + app state                          |
| `src/data.js`         | résumé content                             |
| `src/dashboard.jsx`   | Platform/SRE dashboard variant             |
| `src/editorial.jsx`   | Editorial / reliability-report variant     |
| `src/shared.jsx`      | command palette, tweaks, theme             |
| `src/styles.css`      | tokens, both variants, print styles        |
| `portrait.png`        | avatar                                     |
| `salvador_fuentesjr_resume.pdf` | downloadable resume              |

## License
Content © Salvador Fuentes Jr. 
