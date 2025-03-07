import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pipolaskuri',
    short_name: 'Pipolaskuri',
    description: 'Laskuri pipon kavennyssilmukoiden laskemiseen',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/pipo.png',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
  }
}