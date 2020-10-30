import ReactMarkdown from "react-markdown/with-html";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { format, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

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
  const dateNormalized = parse(
    publish_date,
    "yyyy-MM-dd h:mm a xxxx",
    new Date()
  );
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
        <PublishDate>
          {format(dateNormalized, "dd ᐧ MMM ᐧ yyyy", { locale: ptBR })}
        </PublishDate>
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
