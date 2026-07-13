# Scholar Portal

A modern and responsive Figma dashboard for browsing scholarships, filtering opportunities, making payments, and managing a student profile. Built with a Powerful UI, dark mode, and interactive dashboard features.

## Features

- **Responsive layout** — fixed sidebar on desktop, collapsible slide-in drawer with a hamburger menu on mobile/tablet.
- **Dark mode** — toggle in the sidebar (desktop) or top bar (mobile); the choice is saved to `localStorage` and respects the OS `prefers-color-scheme` on first visit.
- **Dashboard overview** — stat cards for active scholarships, applications sent, pending payments, and profile completion.
- **Live search** — instantly filter the quick-action cards as you type.
- **Dynamic greeting** — header greeting and date update based on the time of day.
- **Active navigation state** — sidebar highlights the current section as you navigate.
- **Logout confirmation** — guards against accidental sign-out.
- **Smooth micro-interactions** — hover/lift animations on cards and nav links, fade-in transitions.

## Project structure

```
.
├── index.html          # Page markup
├── index.css           # Styling, theming (CSS variables), responsive layout
├── script.js           # Theme toggle, mobile nav, search, greeting, logout logic
├── Group 155.png        # Icon artwork
├── Vector.png            # Icon artwork
├── Vector (1).png        # Icon artwork
├── Vector (2).png        # Icon artwork
└── README.md
```

## Getting started

This is a static site with no build step or dependencies.

1. Clone or download this folder.
2. Open `index.html` directly in a browser, **or** serve it locally for the best experience (fonts/icons load from a CDN either way):

   ```bash
   # Python
   python -m http.server 5500

   # Node
   npx serve .
   ```

3. Visit `http://localhost:5500`.

## Tech

- Semantic HTML5
- CSS3 (custom properties for theming, Flexbox/Grid, media queries)
- Vanilla JavaScript (no frameworks or build tools)
- [Font Awesome 4.7](https://fontawesome.com/v4/) via CDN for icons

## Browser support

Latest versions of Chrome, Edge, Firefox, and Safari. Uses CSS custom properties and `prefers-color-scheme`, so it will not render themed styles correctly on very old browsers (IE11 and earlier).

## Customization

- Colors and spacing live in the `:root` and `[data-theme="dark"]` variable blocks at the top of `index.css` — change them there to re-theme the whole app.
- Dashboard stats in `index.html` (`#statScholarships`, `#statApplications`, etc.) are static placeholders; wire them up to a real API/backend to make them dynamic.
