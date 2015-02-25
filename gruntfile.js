module.exports = function(grunt) {
  'use strict';

  // autoload modules from package.json
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Tasks configurations
  grunt.initConfig({
    rename: {
      main: {
        files: [{
          src: ['./public/blog/feed/index.html'],
          dest: './public/blog/feed/feed.xml'
        }]
      }
    },

    copy: {
      components: {
        files: [{
          expand: true,
          src: ['**'],
          cwd: './sources/components/',
          dest: './public/components/'
        }, {
          expand: true,
          src: ['**'],
          cwd: './sources/statics/fonts/',
          dest: './public/static/fonts/'
        }, {
          expand: true,
          src: ['**'],
          cwd: './sources/statics/images/',
          dest: './public/static/images/'
        }]
      },
      misc: {
        files: [{
          expand: true,
          src: ['**'],
          cwd: './public/blog/feed/',
          dest: './public/blog/'
        },{
          expand: true,
          src: ['sitemap.xml', 'googleac7fd0fa4feb55aa.html', 'robots.txt'],
          cwd: './sources/misc/',
          dest: './public/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          src: ['**'],
          cwd: './public/',
          dest: './dist/public/'
        },{
          expand: true,
          src: ['**'],
          cwd: './node_modules/hapi/',
          dest: './dist/node_modules/hapi/'
        },{
          expand: true,
          src: ['**'],
          cwd: './node_modules/moment/',
          dest: './dist/node_modules/moment/'
        },{
          expand: true,
          src: ['betomuniz.js', 'package.json'],
          cwd: './',
          dest: './dist/'
        }]
      }
    },

    clean: {
      misc: ["./public/blog/feed/"],
      dist: ["./dist/"],
      public: ["./public/"],
      external_posts: [
        "./public/blog/em-um-relacionamento-s-rio-com-generators-front-end/"
      ]
    },

    shell: {
      bower: {
        command: 'bower install'
      },
      compile: {
        command: 'node build.js'
      }
    },

    concat: {
      vendors: {
        src: [
          './sources/components/platform/platform.js',
          './sources/components/polymer/polymer.js',
          './sources/components/highlightjs/highlight.pack.js',
          './sources/components/handlebars/handlebars.min.js',
          './sources/components/momentjs/min/moment.min.js'
        ],
        dest: './sources/statics/javascripts/vendors.js'
      },
      compile: {
        src: [
          './sources/statics/javascripts/vendors.js',
          './sources/statics/javascripts/components/**/*',
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
          'shell:compile',
          'copy:components',
          'rename:main',
          'copy:misc',
          'clean:misc'
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
          callback: function(nodemon) {
            nodemon.on('log', function(event) {
              console.log(event.colour);
            });

            nodemon.on('config:update', function() {
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

    rsync: {
        options: {
            args: ["--verbose"],
            exclude: [".DS_Store"],
            recursive: true
        },
        dist: {
          options: {
              src: "./dist/",
              dest: "/var/www/betomuniz.com",
              host: "root@162.243.11.136",
              delete: true
          }
        }
    }

  });

  grunt.registerTask('default', [
    'clean:public',
    'shell:compile',
    'copy:components',
    'compass:compile',
    'concat:vendors',
    'concat:compile',
    'uglify:compile',
    'rename:main',
    'copy:misc',
    'clean:misc',
    'clean:external_posts',
    'concurrent'
  ]);

  grunt.registerTask('b', [
    'clean:public',
    'shell:compile',
    'copy:components',
    'compass:compile',
    'concat:vendors',
    'concat:compile',
    'uglify:compile',
    'rename:main',
    'copy:misc',
    'clean:misc',
    'clean:external_posts'
  ]);

  grunt.registerTask('d', [
    'clean:dist',
    'clean:public',
    'shell:bower',
    'shell:compile',
    'copy:components',
    'compass:compile',
    'concat:vendors',
    'concat:compile',
    'uglify:compile',
    'rename:main',
    'copy:misc',
    'clean:misc',
    'clean:external_posts',
    'copy:dist',
    'rsync:dist',    
    'clean:public',
    'clean:dist'
  ]);

};
