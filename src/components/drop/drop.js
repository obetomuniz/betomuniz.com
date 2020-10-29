import ReactMarkdown from "react-markdown/with-html";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import {
  Title,
  Subtitle,
  Metadata,
  Category,
  PublishDate,
  Article,
} from "./ui";

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={dracula} language={language} children={value} />
    );
  },
};

const Drop = ({ content, metadata }) => {
  const { title, subtitle, category, publish_date } = metadata;
  return (
    <>
      <Title>
        {title} {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Title>

      <Metadata>
        <Category color={`--CATEGORY_${category.toUpperCase()}_COLOR`}>
          {category.replace("_", " ")}
        </Category>
        {" ᐧ "}
        <PublishDate>{new Date(publish_date).getUTCFullYear()}</PublishDate>
      </Metadata>

      <Article>
        <ReactMarkdown
          renderers={renderers}
          plugins={[gfm]}
          allowDangerousHtml
          children={content}
        />
      </Article>
    </>
  );
};

export default Drop;
