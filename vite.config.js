import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Open Graph / Twitter images must be absolute URLs. Override with the SITE_URL
// env var (e.g. when you add a custom domain).
const DEFAULT_SITE_URL = 'https://ishika-dumeer.vercel.app'
const siteUrl = () => (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')

const injectSiteUrl = () => ({
  name: 'inject-site-url',
  transformIndexHtml: {
    order: 'pre',
    handler: (html) => html.replaceAll('__SITE_URL__', siteUrl()),
  },
})

export default defineConfig({ plugins: [react(), injectSiteUrl()] })
