module.exports = function( grunt ) {
  'use strict';

  // autoload modules from package.json
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Tasks configurations
  grunt.initConfig({

    metalsmith: {
      compile: {
        options: {
          clean: true,
          metadata: {
            title: 'Beto Muniz',
            description: 'Meu site.'
          },
          plugins: {
            'metalsmith-markdown': {},
            'metalsmith-permalinks': {
              pattern: ':collection/:title'
            },
            'metalsmith-collections': {
              articles: {
                sortBy: 'date',
                reverse:  true
              }
            },
            'metalsmith-templates': {
              engine: 'handlebars',
              directory: 'sources/templates'
            }
          }
        },
        src: 'sources/content',
        dest: 'public'
      }
    }

  });

  grunt.registerTask('default', [
      'metalsmith:compile'
  ]);

};
