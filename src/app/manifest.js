export default function manifest() {
  return {
    name: 'Lighthouse Research Team',
    short_name: 'Lighthouse Research',
    description: 'The blog of the Lighthouse Research Team',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: './favicon-32x32.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
      {
        src: './favicon-16x16.svg',
        sizes: '16x16',
        type: 'image/svg+xml',
      },
      {
        src: './android-chrome-192x192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: './android-chrome-512x512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  }
}