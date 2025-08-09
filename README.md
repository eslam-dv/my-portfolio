# My Personal Portfolio

A simple, fast personal portfolio built with HTML, CSS, and a small amount of vanilla JavaScript. Project cards are loaded dynamically from a local JSON file (projects.json) and rendered on the page.

## Features

- Responsive layout with a mobile menu
- Projects rendered from projects.json (no database or backend needed)
- Easy to add/update projects by editing a single JSON file
- Minimal dependencies and no build step

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)
- Font Awesome (icons)

## Project Structure

```
my-portfolio/
├── index.html           # Main page
├── app.js               # Menu toggle + dynamic project rendering (fetch projects.json)
├── projects.json        # Source of project data
├── css/
│   ├── style.css
│   └── all.min.css      # Font Awesome
├── images/              # Avatars / screenshots
├── webfonts/            # Font Awesome assets
└── README.md
```

Note: The projects container element in index.html has the id "ptojects-content" (typo maintained intentionally). The app.js script expects this exact id. If you change it, update app.js accordingly.

## Getting Started (Local Development)

Because the site fetches projects.json, you need to run it from a local web server (opening index.html via file:// will block the fetch due to browser security/CORS).

Pick one of the following options:

- VS Code Live Server extension (recommended):

  - Open the project in VS Code
  - Right-click index.html → "Open with Live Server"

- Python (built-in, no install needed on most systems):

  - Python 3: `python3 -m http.server 5500`
  - Then open http://localhost:5500

- Node (if you have npm):
  - `npx serve -l 5500`
  - Then open http://localhost:5500

## Editing Projects (projects.json)

All project cards are defined in projects.json. Each item uses this schema:

- title: string (project name)
- image: string (URL or relative path to an image)
- tech: array of strings (technologies)
- description: string (short summary)
- github: string (URL to the repository)
- preview: string (live demo URL)

Example:

```json
[
  {
    "title": "My App",
    "image": "images/my-app.png",
    "tech": ["html", "css", "js"],
    "description": "A small app demonstrating X.",
    "github": "https://github.com/username/my-app",
    "preview": "https://username.github.io/my-app/"
  }
]
```

Tips:

- Use local images from the images/ folder or external URLs.
- Keep tech concise (e.g., ["react", "node", "css"]).

## Customization

- Hero avatar: replace images/man-avatar.jpg with your own image (or update the src in index.html).
- Social links: update the href attributes in index.html (GitHub, LinkedIn, Resume, etc.).
- About/Contact text: edit the copy in index.html under the About and Contact sections.
- Styles: modify css/style.css to adjust colors, layout, spacing, etc.

## Deployment

This is a static site; any static hosting works. Common options:

- GitHub Pages

  - Push this repository to GitHub
  - In your repo: Settings → Pages → Deploy from a branch → main → /(root)
  - Your site will be live at https://<username>.github.io/<repo>/

- Netlify/Vercel
  - Drag-and-drop the folder or connect your repo; no build step required.

Note: If you change file names or paths, ensure fetch("projects.json") still resolves correctly in production.

## Troubleshooting

- Projects don’t show up locally: ensure you’re serving via http:// (see Getting Started). Opening from file:// will block the fetch.
- JSON not updating after deploy: your host may cache aggressively. Try a hard refresh, or increment a query string in app.js (e.g., fetch("projects.json?v=2")).
- Icons not rendering: confirm css/all.min.css and the webfonts/ directory are deployed.

## Author

Built by Eslam Osama.
