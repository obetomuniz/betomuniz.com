module.exports = function( grunt ) {
  'use strict';

  // autoload modules from package.json
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Tasks configurations
  grunt.initConfig({

    copy: {
      components:{
          files: [
            {expand: true, src: ['**'], cwd:'./sources/components/',dest: './public/components/'},
            {expand: true, src: ['**'], cwd:'./sources/statics/fonts/',dest: './public/static/fonts/'},
            {expand: true, src: ['**'], cwd:'./sources/statics/images/',dest: './public/static/images/'},
          ]
      }
    },

    metalsmith: {
      compile: {
        options: {
          clean: false,
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
              blog: {
                sortBy: 'date'
              },
              projects: {
                sortBy: 'date'
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
    },

    concat: {
        vendors: {
          src: [
              './sources/components/platform/platform.js'
          ],
          dest: './sources/statics/javascripts/vendors.js'
        },
        compile: {
          src: [
              './sources/statics/javascripts/vendors.js',
              './sources/statics/javascripts/bm.js'
          ],
          dest: './sources/statics/javascripts/bm.tmp.js'
       }
    },

    uglify: {
      compile: {
        files: {
          './public/static/javascripts/bm.js': ['./sources/statics/javascripts/bm.tmp.js']
        }
      }
    },

    compass: {
      compile: {
        options: {
          sassDir: './sources/statics/stylesheets',
          cssDir: './public/static/stylesheets',
          outputStyle: 'compressed'
        }
      }
    },

    watch: {
      html: {
        options: {
          livereload: true
        },
        files: ['./sources/content/**/*', './sources/templates/**/*'],
        tasks: [
          'metalsmith:compile',
          'copy:components'
        ]
      },
      styles: {
        options: {
          livereload: true
        },
        files: ['./sources/statics/stylesheets/**/*.scss'],
        tasks: [
          'compass:compile'
        ]
      },
      scripts: {
        options: {
          livereload: true
        },
        files: ['./sources/statics/javascripts/**/*'],
        tasks: [
          'concat:vendors',
          'concat:compile',
          'uglify:compile'
        ]
      }
    },

    nodemon: {
      dev: {
        script: 'betomuniz.js',
        options: {
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });

            nodemon.on('config:update', function () {
              setTimeout(function() {
                require('open')('http://localhost:3000');
              }, 1000);
            });
          },
          ignore: ['node_modules/**', 'public/**', '.sass-cache/**'],
          cwd: __dirname
        }
      }
    },

    concurrent: {
        target: {
            tasks: ['nodemon:dev', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    },

  });

  grunt.registerTask('default', [
      'metalsmith:compile',
      'copy:components',
      'compass:compile',
      'concat:vendors',
      'concat:compile',
      'uglify:compile',
      'concurrent'
  ]);

};
