import { NextSeo } from "next-seo";
import matter from "gray-matter";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;
const Container = styled.div`
  text-align: center;
`;

const Home = ({ page }) => {
  console.log(page);
  return (
    <>
      <NextSeo title="Beto Muniz" />

      <Container>
        <GlobalStyle />
        <h1>Hello, world!</h1>
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
