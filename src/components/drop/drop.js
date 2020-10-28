import { Container } from "./ui";
import ReactMarkdown from "react-markdown/with-html";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const renderers = {
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={dracula} language={language} children={value} />
    );
  },
};

const Drop = ({ content }) => {
  return (
    <Container>
      <ReactMarkdown
        renderers={renderers}
        plugins={[gfm]}
        allowDangerousHtml
        children={content}
      />
    </Container>
  );
};

export default Drop;
