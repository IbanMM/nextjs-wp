const withSass = require('@zeit/next-sass')
const withImages = require('next-optimized-images')
module.exports =  withImages(withSass({
    publicRuntimeConfig: { // Disponible en servidor y cliente
        API: 'https://www.leihoa.eus//wp-json/wp/v2/'
    }
})
)

    

