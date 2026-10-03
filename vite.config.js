import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Open Graph / Twitter images must be absolute URLs. Use SITE_URL if set,
// otherwise the production domain Vercel exposes at build time, otherwise
// fall back to relative paths (fine for local dev).
function siteUrl() {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, '')
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  return ''
}

const injectSiteUrl = () => ({
  name: 'inject-site-url',
  transformIndexHtml: {
    order: 'pre',
    handler: (html) => html.replaceAll('__SITE_URL__', siteUrl()),
  },
})

export default defineConfig({ plugins: [react(), injectSiteUrl()] })
