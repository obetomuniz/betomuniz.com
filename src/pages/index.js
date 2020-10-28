import { NextSeo } from "next-seo";
import matter from "gray-matter";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { rem } from "polished";

import { Layout } from "../components";

const Container = styled.div`
  text-align: center;
  width: 550px;
  margin: 0 auto;
  p {
    font-size: ${rem("18px")};
    line-height: 2.8rem;

    &:first-child {
      &:first-letter {
        font-size: ${rem("32px")};
      }
    }
  }

  a {
    font-weight: bold;
  }
`;

const Home = (props) => {
  const {
    page: { title, description, keywords, canonical, content },
  } = props;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        keywords={keywords.join(", ")}
      />

      <Layout containerAs="main">
        <Container>
          <ReactMarkdown allowDangerousHtml children={content} />
        </Container>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const content = await import(`../content/pages/home.md`);
  const data = matter(content.default);
  return {
    props: { page: { ...data.data } },
  };
}

export default Home;
