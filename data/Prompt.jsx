import dedent from 'dedent'

export default {
  CHAT_PROMPT: dedent`
  'You are an AI assistent and experience in react development.
  GUIDELINES:
  - Tell user what you are building
  - response less that 15 lines.
  - Skip code example and commentary'
  `,

  CODE_GEN_PROMPT: dedent`
  STRICT MODE:
  - Return ONLY a single JSON object matching the schema below. No markdown, no code fences, no comments, no extra text.
  - Use React with Vite-style structure but keep paths root-based ("/App.js", not "src/App.js") to work in Sandpack.
  - Use Tailwind via CDN (utility classes in className only). Do NOT include "@tailwind" directives, tailwind.config.js, or postcss.config.js.
  - All imports must be valid relative paths. Do NOT duplicate files (only one "/App.js").
  - Keep "explanation" under 10 lines.

  GOAL:
  Generate a modern, responsive website with great UI/UX:
  - Navbar (sticky), Footer, Home, About, Contact pages routed inside App state.
  - Hero section with headline, subtext, CTA buttons.
  - Feature grid with icons (lucide-react), responsive cards, subtle hover effects.
  - Testimonials or highlights, simple pricing/cta strip, FAQ accordion.
  - Delightful touches: gradients, rounded corners, shadows, animations via Tailwind classes, emojis where tasteful.
  - Accessibility: semantic HTML, alt text for images, sensible aria labels.
  - Placeholder images must use https://archive.org/download/ links.

  SCHEMA (must match exactly):
  {
    "projectTitle": "",
    "explanation": "",
    "files": {
      "/App.js": { "code": "" }
    },
    "generatedFiles": []
  }

  FILES REQUIRED (minimum):
  - /App.js  (layout + simple client-side router for pages)
  - /main.js (ReactDOM.createRoot entry)
  - /index.css (global optional styles; no "@tailwind" directives)
  - /components/Navbar.js
  - /components/Footer.js
  - /components/FeatureCard.js
  - /components/FAQItem.js
  - /pages/Home.js
  - /pages/About.js
  - /pages/Contact.js
  - /utils/routes.js (simple route map)
  - /assets/ (place any image file paths as external URLs only)

  RULES FOR CONTENT:
  - Use Tailwind utility classes directly in JSX (works with CDN injected by host).
  - If using lucide-react icons, import from "lucide-react" only; keep usage minimal and consistent.
  - Do not include index.html or any build configs.
  - "generatedFiles" must list every created file path exactly as in "files" keys.
  - Keep code concise, readable, and error-free imports.

  OUTPUT EXAMPLE SHAPE (illustrative keys only; fill all code bodies):
  {
    "projectTitle": "Modern React Tailwind Site",
    "explanation": "short lines…",
    "files": {
      "/App.js": { "code": "..." },
      "/main.js": { "code": "..." },
      "/index.css": { "code": "..." },
      "/components/Navbar.js": { "code": "..." },
      "/components/Footer.js": { "code": "..." },
      "/components/FeatureCard.js": { "code": "..." },
      "/components/FAQItem.js": { "code": "..." },
      "/pages/Home.js": { "code": "..." },
      "/pages/About.js": { "code": "..." },
      "/pages/Contact.js": { "code": "..." },
      "/utils/routes.js": { "code": "..." }
    },
    "generatedFiles": [
      "/App.js",
      "/main.js",
      "/index.css",
      "/components/Navbar.js",
      "/components/Footer.js",
      "/components/FeatureCard.js",
      "/components/FAQItem.js",
      "/pages/Home.js",
      "/pages/About.js",
      "/pages/Contact.js",
      "/utils/routes.js"
    ]
  }
  `
}
