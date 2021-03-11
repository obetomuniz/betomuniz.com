import glob from 'glob';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown/with-html';

import {
  SocialsContainer,
  NewsletterContainer,
  ProjectsContainer,
  FooterContainer,
} from '../styles/pages/home';
import { createTitle } from '../helpers';
import {
  Head,
  Socials,
  Layout,
  About,
  Newsletter,
  ProjectList,
  Footer,
} from '../components';

const Home = (props) => {
  const {
    page: { title, description, keywords, canonical, content },
    projects,
  } = props;

  const socials = () => (
    <SocialsContainer>
      <Socials />
    </SocialsContainer>
  );

  const pageTitle = createTitle(title);

  return (
    <>
      <Head
        title={pageTitle}
        description={description}
        url={canonical}
        keywords={keywords}
      />

      <Layout showPhoto hideFooter socials={socials}>
        <About>
          <ReactMarkdown allowDangerousHtml children={content} />
        </About>

        <NewsletterContainer>
          <Newsletter />
        </NewsletterContainer>

        <ProjectsContainer>
          <ProjectList data={projects} />
        </ProjectsContainer>

        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const PROJECTS_PATH = `src/content/projects`;
  const pageContent = await import(`../content/pages/home.md`);
  const page = matter(pageContent.default).data;
  const projectFiles = glob.sync(`${PROJECTS_PATH}/**/*.md`);
  const projects = await Promise.all(
    projectFiles.map(async (projectFile) => {
      const projectFilename = projectFile
        .replace(`${PROJECTS_PATH}/`, '')
        .replace(`.md`, '');
      const project = await import(`../content/projects/${projectFilename}.md`);
      return matter(project.default).data;
    })
  );
  const projectsOrdered = projects.sort((a, b) => a.position - b.position);

  return {
    props: { page, projects: projectsOrdered },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

export default Home;
