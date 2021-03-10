import { Project } from '..';
import { Container } from './ui';

const ProjectList = ({ data }) => {
  return (
    <Container>
      {data.map((item, idx) => (
        <Project key={`project-${idx}`} data={item} />
      ))}
    </Container>
  );
};

export default ProjectList;
