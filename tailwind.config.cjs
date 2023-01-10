module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#1B73E8',
                black: '#000',
            },
           
        },
        fontFamily: {
            sans: ['"Poppins"', 'sans-serif']
          }
    },
    corePlugins: {
        container: false
      },

    plugins: [
        // require('@tailwindcss/forms'),
        function ({ addComponents }) {
            addComponents({
              '.container': {
                maxWidth: '100%',
                '@screen sm': {
                  maxWidth: '640px',
                },
                '@screen md': {
                  maxWidth: '768px',
                },
                '@screen lg': {
                  maxWidth: '933px',
                },
                '@screen xl': {
                  maxWidth: '1196px',
                },
              }
            })
          }
    
    ],
    
};