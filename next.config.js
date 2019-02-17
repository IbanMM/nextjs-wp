const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
    [optimizedImages, {
      /* config for next-optimized-images */
    }],
    [withSass, {
        publicRuntimeConfig: { // Disponible en servidor y cliente
            API: 'https://www.leihoa.eus//wp-json/wp/v2/'
        }
    }]
  ]);
    

