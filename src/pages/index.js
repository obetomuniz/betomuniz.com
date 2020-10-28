import { NextSeo } from "next-seo";
import matter from "gray-matter";
import styled, { createGlobalStyle } from "styled-components";
import ReactMarkdown from "react-markdown";

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;
const Container = styled.div`
  text-align: center;
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

      <Container>
        <GlobalStyle />
        <ReactMarkdown children={content} />
      </Container>
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
