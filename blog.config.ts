import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'http://paneldetecho.local/',
  postsPerPage: 4,
  defaultLayout: 'featured',
  locale: 'en',

  theme: {
    accent: '#f97316',
    background: '#f8fafc',   // --color-bg
    surface: '#ffffff',   // --color-surface
    text: '#1e293b',   // --color-text
    muted: '#64748b',   // --color-text-muted
    mutedLight: '#94a3b8',   // --color-text-subtle
    border: '#e2e8f0',   // --color-border
    black: '#0f172a',   // --color-dark
    white: '#ffffff',
    fontHeading: '"Inter", system-ui, sans-serif',
    fontBody: '"Inter", system-ui, sans-serif',
    fontMono: '"JetBrains Mono", monospace',
    fontDisplay: '"Inter", system-ui, sans-serif',
    containerMax: '80rem',     // --max-width
  },

  hero: {
    tagline: 'Our Blog',
    titleLine1: 'Latest',
    titleLine2: 'Articles',
    description: 'Welcome to our blog.',
  },

  ui: {
    readMoreLabel: 'Read more',
    btnPrev: 'Previous',
    btnNext: 'Next',
    commentButtonColor: 'var(--bk-accent)',
    commentButtonTextColor: 'var(--bk-black)',
    paginationStyle: 'minimal',
    // ── Personalización de paginación (opcional) ──────────────
    // Descomenta y cambia los valores según tu marca.
    // Por defecto usan el accent y black del tema.
    paginationBtnBg: '#f97316',   // --color-primary
    paginationBtnText: '#ffffff',   // blanco sobre naranja
    paginationBtnHoverBg: '#ea6c0a',   // --color-primary-hover
    paginationBtnHoverText: '#ffffff',
    paginationActiveBg: '#f97316',   // --color-primary
    paginationActiveText: '#ffffff',
  },
});
