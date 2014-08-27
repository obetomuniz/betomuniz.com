var extname = require('path').extname;
var Metalsmith = require('metalsmith');
var drafts = require('metalsmith-drafts');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var permalinks = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
var templates = require('metalsmith-templates');
var Handlebars = require('handlebars');
var moment = require('moment');




/**
 * Build.
 */

var metalsmith = Metalsmith(__dirname)
  .source('sources/content')
  .destination('public')
  .use(drafts())
  .use(markdown())
  .use(permalinks(':collection/:title'))
  .use(collections({
    blog: {
      sortBy: 'date',
      reverse:  true
    },
    portfolio: {
        sortBy: 'date',
        reverse:  true
    },
    projects: {
      sortBy: 'date',
      reverse:  true
    }
  }))
  .use(templates({
    engine: 'handlebars',
    directory: 'sources/templates'
  }))
  .build(function(err){
    if (err) throw err;
  });

/**
 * Helpers.
 */
Handlebars.registerHelper('brDate', function (ctx) {
  return moment(ctx).format('DD.MM.YYYY');
});
