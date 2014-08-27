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
var fs = require('fs');




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
    directory: 'sources/templates',
    params: {
        partials: {
            footer: "partials/footer",
            header: "partials/header"
        }
    }
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


/**
 * Partials.
 */
Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/sources/templates/partials/header.html').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/sources/templates/partials/footer.html').toString());
