import helpers from './helpers';
import metalsmithCollections from 'metalsmith-collections';
import metalsmithDrafts from 'metalsmith-drafts';
import metalsmithLayouts from 'metalsmith-layouts';
import metalsmithMarkdown from 'metalsmith-markdown';
import metalsmithPermalinks from 'metalsmith-permalinks';
import metalsmithWordCount from 'metalsmith-word-count';
import partials from './partials';

export default function() {
  helpers();
  partials();

  return [
    metalsmithDrafts(),
    metalsmithMarkdown(),
    metalsmithWordCount({
      metaKeyCount: 'wordCount',
      metaKeyReadingTime: 'readingTime',
      speed: 275
    }),
    metalsmithPermalinks(':collection/:title'),
    metalsmithCollections({
      blog: {
        sortBy: 'date',
        reverse: true
      }
    }),
    metalsmithLayouts({
      engine: 'handlebars',
      directory: 'source/layouts',
      params: {
        partials: {
          footer: 'partials/footer',
          header: 'partials/header'
        }
      }
    })
  ];
}
