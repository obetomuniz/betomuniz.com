import ReactMarkdown from 'react-markdown/with-html';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { format, parse } from 'date-fns';
import { enUS } from 'date-fns/locale';

import { A } from './components';
import { Title, Metadata, PublishDate, Article } from './ui';

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={dracula}
        language={language}
        children={value}
        data-language={language}
      />
    );
  },
  link: (props) => <A {...props} />,
};

const Drop = (props) => {
  const {
    page: { title, body_markdown, published_at: date },
  } = props;
  const dateNormalized = parse(date, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date());
  return (
    <>
      <Title>{title}</Title>

      <Metadata>
        <PublishDate dateTime={date}>
          {format(dateNormalized, 'dd ᐧ MMM ᐧ yyyy', { locale: enUS })}
        </PublishDate>
      </Metadata>

      <Article>
        <ReactMarkdown
          renderers={renderers}
          plugins={[gfm]}
          allowDangerousHtml
          children={body_markdown}
        />
      </Article>
    </>
  );
};

export default Drop;
